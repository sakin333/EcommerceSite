const { PrismaClient } = require("@prisma/client");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
const port = 4001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const prisma = new PrismaClient();

app.use("/api/user", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
