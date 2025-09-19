import express from "express"
import { checkAuth, logIn, signup, updateProfile } from "../controller/userController.js"
import { protectRoute } from "../middleware/auth.js"

const userRouter = express.Router()

userRouter.post("/signup", signup)
userRouter.post("/login", logIn)
userRouter.put("/update-profile", protectRoute, updateProfile)
userRouter.get("/check", protectRoute, checkAuth)

export default userRouter