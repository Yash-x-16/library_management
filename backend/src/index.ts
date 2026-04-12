import express from "express"  
import dotenv from "dotenv"
dotenv.config() ; 

const app = express() ; 

try {
   
    app.use(express.json()) ; 
    
} catch (error) {
    console.log("error in the root",error)
}