require('dotenv').config();
const jwt = require('jsonwebtoken');

function adminMiddleware(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD);

    if (decodedData) {
        req.adminId = decodedData.id;
        
        next();
    } else {
        res.status(403).json({
            message: "You are not Signed-in"
        });
    }
}

module.exports = {
    adminMiddleware
}