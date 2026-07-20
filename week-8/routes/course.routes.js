require('dotenv').config();

const { Router } = require("express");

const { Purchase, Course } = require("../db");
const { userMiddleware } = require("../middlewares/user.middleware");

const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const { courseId } = req.body;

    if (!courseId) {
        return res.status(400).json({
            message: "Please provide a courseId"
        });
    }

    try {
        const existingPurchase = await Purchase.findOne({
            courseId: courseId,
            userId: userId
        });

        if (existingPurchase) {
            return res.status(400).json({
                message: "You have already bought this course"
            });
        }

        await Purchase.create({
            courseId: courseId,
            userId: userId
        });

        res.status(201).json({
            message: "You have successfully bought the course"
        });
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong while purchasing the course!"
        });
    }
});

courseRouter.get("/preview", async (req, res) => {
    try {
        const courses = await Course.find({});

        res.status(200).json({
            courses: courses
        });
    } catch (e) {
        res.status(500).json({
            message: "Something went wrong while fetching courses!"
        });
    }
});

module.exports = {
    courseRouter: courseRouter
};