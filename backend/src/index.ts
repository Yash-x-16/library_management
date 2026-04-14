import express from "express"  
import dotenv from "dotenv"
import { connectDb } from "./db/db.js";
dotenv.config() ; 

const app = express() ; 

try {
    
   await connectDb() ;
    app.use(express.json()) ; 
    
} catch (error) {
    console.log("error in the root",error)
}