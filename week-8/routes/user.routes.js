require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 

const { Router } = require('express');

const { User, Purchase, Course } = require('../db');
const { userMiddleware } = require('../middlewares/user.middleware')

const userRouter = Router();

userRouter.post("/sign-up", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);

    let errorThrown = false;

    try {
        await User.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
    } catch (e) {
        errorThrown = true;
        
        res.json({
            message: "User already exists!"
        });
    }

    if (!errorThrown) {
        res.json({
            message: "Sign-up succesfull!"
        });
    }
});

userRouter.post("/sign-in", async (req, res) => {
    const { email, password } = req.body; 

    const foundUser = await User.findOne({
        email 
    });

    if (!foundUser) {
        res.status(403).json({
            message: "User not found!"
        });
    }
    
    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: foundUser._id
        }, process.env.JWT_USER_PASSWORD);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid credentials!"
        });
    }
});

userRouter.get("/purchases", userMiddleware, async (req, res) => {
    const userId =  req.userId;
    const courseId = req.body.courseId;

    await Purchase.create({
        userId: userId,
        courseId: courseId
    });

    res.json({
        message: "Course purchase succesfull!"
    });
});

userRouter.get("/preview", async(req, res) => {
    const courses =  await Course.find({});

    res.json({
        courses
    });
})

module.exports = {
    userRouter: userRouter
}