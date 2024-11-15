import express from "express"
import { activateUser, registrationUser, loginUser, logoutUser } from "../controller/user.controller"
import { isAutheticated } from "../middleware/auth"
const userRouter = express.Router()

userRouter.post("/registration", registrationUser)

userRouter.post("/activate-user", activateUser)

userRouter.post("/login", loginUser)

userRouter.get("/logout", isAutheticated, logoutUser)


export default userRouter 