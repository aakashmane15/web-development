require('dotenv').config();
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, process.env.JWT_USER_PASSWORD);

    if (decodedData) {
        req.userId = decodedData.id;
        
        next();
    } else {
        res.status(403).json({
            message: "You are not Signed-in"
        });
    }
}

module.exports = {
    userMiddleware
}