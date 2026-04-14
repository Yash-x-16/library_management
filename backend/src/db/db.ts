import { DB_CONNECTION_STRING } from "../utils/envExports.js"
import mongoose from "mongoose"
export const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect(DB_CONNECTION_STRING  as string) ; 
        const host =connection.connection.host ; 
        return host 
    } catch (error) {
        console.log("error in connecting to the db ",error) ; 
    }    
}