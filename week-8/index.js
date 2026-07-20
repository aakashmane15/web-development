const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user.routes');
const { courseRouter } = require('./routes/course.routes');
const { adminRouter } = require('./routes/admin.routes');

const { User, Admin, Course, Purchase } = require('./db'); 

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
    await mongoose.connect("mongodb+srv://aakashmane:Aakash%40_50585958@project.uaq2ecx.mongodb.net/course-app")
    app.listen(3000);
}

main();