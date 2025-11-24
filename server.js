require("dotenv").config();
const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const blogController = require("./controllers/blogController");
const authController = require("./controllers/authController");

const app = express();
app.use(express.json());

app.use(cors({ origin: "*"}));

app.use("/blogs", blogRoutes);
app.use("/users", authRoutes);
app.get("/", (req, res) =>  blogController.getallblogs(req, res));
app.get("/user/:id", (req, res) =>  authController.getbyuser(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;