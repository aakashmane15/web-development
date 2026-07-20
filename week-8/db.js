const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userId: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    adminId: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    courseId: ObjectId,
    creatorId: ObjectId,
    title: String, 
    description: String,
    imageUrl: String,
    price: Number,
})

const purchaseSchema = new Schema({
    purchaseId: ObjectId,    
    courseId: ObjectId,
    userId: ObjectId
})

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = {
    User:  User,
    Admin: Admin,
    Course: Course,
    Purchase: Purchase
}