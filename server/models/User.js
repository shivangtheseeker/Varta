import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    fullname : {type: String},
    password: {type: String, required: true, minlength: 6}, 
    profilePic: {type: String, default: ""},
    bio: {type: String, default: "Hey, I am Using Varta"},
}, {timestamps: true});

const User = mongoose.model("User", userSchema)

export default User;