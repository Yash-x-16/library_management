import { Router } from "express"; 
import { isUser, Signin, Signup } from "../controllers/auth.Contreller.js";

const authRoutes  = Router() 
try {
    authRoutes.post("/signup",Signup)  ; 
    authRoutes.post("/signin",Signin ) ; 
    authRoutes.get("/isUser",isUser) ; 
    } 
    catch (error) {
    console.log("error in the authRoutes",error)
}
export default authRoutes ; 