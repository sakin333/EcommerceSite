const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await prisma.user.findUnique({
      where: {
        _id,
      },
      select: {
        _id,
      },
    });
    next();
  } catch (error) {
    console.log("Error: ", error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
