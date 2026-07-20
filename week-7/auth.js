const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "Aakash@_50585958";

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET_KEY);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            messgage: "Invalid credentials!"
        });
    }
}

module.exports = {
    auth,
    JWT_SECRET_KEY
}