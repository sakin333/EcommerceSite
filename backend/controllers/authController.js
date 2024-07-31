const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const { validateSignupData } = require("../utils/validate");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signup = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    //validation
    validateSignupData(email, password, username);

    const exists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exists) {
      throw Error("Email already in use");
    }

    //adding extra characters to the password to avoid password matching
    const salt = await bcrypt.genSalt(10);
    //hash the salt with password
    const hash = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hash,
      },
    });

    //create token
    const token = createToken(newUser.id);

    if (newUser) {
      res.status(201).json({ email, token });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error("All fields must be filled");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw Error("Invalid login credentials");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Invalid login credentials");
    }

    const token = createToken(user.id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { signup, login };
