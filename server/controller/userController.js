import { genrateToken } from "../lib/utils.js";
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import cloudinary from "../lib/cloudnary.js";

export const signup = async (req, res) => {
    const {email, fullName, password} = req.body;

    try{
        if(!email || !fullName || !password ){
            return res.json({success: false, message: "Missing Details"})
        }
        const user = await User.findOne({email});
        if(user){
            return res.json({success: false, message: "Account already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            email, fullName, password: hashedPassword
        })

        const token = genrateToken(newUser._id)

        res.json({success: true, userData: newUser, token, message: "Account created successfully"})
    }
    catch(error){
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

export const logIn = async (req, res) => {
    try{
        const {email, password} = req.body;
        const userData = await User.findOne({email})
        const isPasswordCorrect = await bcrypt.compare(password, userData.password)

        if(!isPasswordCorrect){
            res.json({success: false, message: "Invalid credentials"})
        }

        const token = genrateToken(userData._id)

        res.json({success: true, userData, token, message: "logged in successfully"})
    }
    catch(error){
        console.log(error.message)
        res.json({success: false, message: error.message}) 
    }
    
}

export const checkAuth = (req, res) => {
    res.json({success: true, user: req.user})
}

export const updateProfile = async (req, res)=>{
    try{
        const { profilePic, bio, fullName} = req.body
        const userId = req.user._id
        let updateProfile;

        if(!profilePic){
           updateProfile = await User.findByIdAndUpdate(userId, {bio, fullName}, {new: true})
        }
        else {
            const upload = await cloudinary.uploader.upload(profilePic)
            updateProfile = await User.findByIdAndUpdate(userId, {profilePic : upload ,bio, fullName}, {new: true})
        }

        res.json({success: true, user: updatedUser})
    }
    catch (error){
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}