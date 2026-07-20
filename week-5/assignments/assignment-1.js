const express = require('express');
const app = express();

let reqCount = 0;

function loggerMiddleware(req, res, next) {
    reqCount++;
    console.log(`The request count is: ${reqCount}`);

    console.log(`The method is: ${req.method}`);

    console.log(`The host is: ${req.hostname}`);

    console.log(`The date and time is: ${new  Date()}`);

    next();
}

app.use(express.json());
app.use(loggerMiddleware);

app.get("/add", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        result: a + b
    });
})

app.get("/subtract", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        result: a - b
    });
})

app.get("/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        result: a * b
    });
})

app.get("/divide", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        result: a / b
    });
})

app.listen(3000);