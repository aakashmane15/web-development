require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Router } = require("express");

const { Admin, Course } = require("../db");
const { adminMiddleware } = require("../middlewares/admin.middleware");

const adminRouter = Router();

adminRouter.post("/sign-up", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);

  let errorThrown = false;

  try {
    await Admin.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (e) {
    errorThrown = true;

    res.json({
      message: "Admin already exists!",
    });
  }

  if (!errorThrown) {
    res.json({
      message: "Sign-up succesfull!",
    });
  }
});

adminRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const foundAdmin = await Admin.findOne({
    email,
  });

  if (!foundAdmin) {
    res.status(403).json({
      message: "Admin not found!",
    });
  }

  const passwordMatch = await bcrypt.compare(password, foundAdmin.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: foundAdmin._id,
      },
      process.env.JWT_ADMIN_PASSWORD,
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid credentials!",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const { title, description, imageUrl, price } = req.body;

  let errorThrown = false;

  try {
    const course = await Course.create({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      creatorId: adminId,
    });

    res.json({
      message: "Course created!",
      id: course._id,
    });
  } catch (e) {
    errorThrown = true;

    res.status(500).json({
      message: "Something went wrong while creating the course!",
    });
  }
});

adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;
  const { title, description, imageUrl, price, courseId } = req.body;

  let errorThrown = false;

  try {
    const course = await Course.updateOne(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
      },
    );

    res.json({
      message: "Course updated successfully",
    });
  } catch (e) {
    errorThrown = true;

    res.status(500).json({
      message: "Something went wrong while updating the course!",
    });
  }
});

adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const courses = await Course.find({
    creatorId: adminId,
  });

  res.json({
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
