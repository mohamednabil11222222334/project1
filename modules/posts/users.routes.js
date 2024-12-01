import { Router } from "express";
import { signup } from "./users.controller.js";
import { signin } from "./users.controller.js";
import { checkEmailExist } from "../../middleware/checkEmailExist.js";


const userRouter= Router()
userRouter.post('/signup',checkEmailExist,signup)
userRouter.post('/signin',signin)





export default userRouter