const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } =  require('./db');
const { auth, JWT_SECRET_KEY } = require("./auth");
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://aakashmane:Aakash%40_50585958@cluster0.bb2htan.mongodb.net/todos")

app.use(express.json());

app.post("/sign-up", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 5);

    let errorThrown = false;

    try {
        await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword
        });
    } catch(e) {
        errorThrown = true;

        res.json({
            message: "User already exists!"
        });
    }

    if (!errorThrown) {
        res.json({
            message: "Sign-up Succesful!"
        });    
    }
     
});

app.post("/sign-in", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const foundUser = await UserModel.findOne({
        email: email,
    });

    if(!foundUser) {
        res.status(403).json({
            message: "User does not exist!"
        });
        
        return;
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password)

    if (passwordMatch) {
        const token = jwt.sign({
            id: foundUser._id.toString()
        }, JWT_SECRET_KEY);

        res.json({
            token: token
        });

    } else {
        res.status(403).json({
            message: "Incorrect credentials!"
        });
    }
});

app.post("/to-do", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const status = req.body.status;

    await TodoModel.create({
        userId: userId,
        title: title,
        status: status
    });

    res.json({
        message: "To-do created!"
    });
});

app.get("/to-dos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todo_list: todos
    });
});

app.listen(3000);