const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomstring";
const app = express();

const users = [];

function auth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.json({
            message: "Token not found!"
        });
    }

    const decodeData = jwt.verify(token, JWT_SECRET);

    if (decodeData.username) {
        req.username = decodeData.username;
        next();
    } else {
        res.json({
            message: "Not found!"
        });
    }
}

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/sign-up", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "You have signed up!"
    });
});

app.post("/sign-in", (req, res) => {  
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => {
        return user.username === username && user.password === password;
    });

    if (foundUser) {
        const token = jwt.sign(
            {
                username: foundUser.username,
            },
            JWT_SECRET
        );

        res.json({
            token: token,
        });
    } else {
        res.status(403).json({
            message: "Invalid username or password!",
        });
    }
});

app.get("/me", auth, (req, res) => {
    const foundUser = users.find((user) => {
        return user.username === req.username; 
    });

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        res.json({
            message: "User not found!",
        });
    }
});

app.listen(3000);
