import { Router } from "express"; 

const authRoutes  = Router() 
try {
    authRoutes.post("/signup",()=>{}) 
    authRoutes.get("/profile/:id",()=>{})
    authRoutes.post("/signin",()=>{})
    authRoutes.get("/isUser",()=>{})
    } 
        catch (error) {
        console.log("error in the authRoutes",error)
}
export default authRoutes ; 