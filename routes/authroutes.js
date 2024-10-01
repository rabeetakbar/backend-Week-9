import express from "express";
import {SignupUser,Loginuser,Logoutuser} from '../controllers/auth.js';
import { Middleware, roleBasedMiddleware } from "../middleware/Middleware.js";


const Authroute = express.Router();

Authroute.post("/signup",Middleware,roleBasedMiddleware('customer','admin','superadmin'),SignupUser)
Authroute.post("/login" ,Middleware,roleBasedMiddleware('customer','admin','superadmin'),Loginuser)
Authroute.post("/logout",Middleware,roleBasedMiddleware('customer','admin','superadmin'),Logoutuser)

export default Authroute

