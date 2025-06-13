import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authrouter from "./routes/authrout.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();

const port=process.env.PORT || 5000;

const app=express()

// cors
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authrouter);


app.listen(port,()=>{
    connectDB();
    console.log("Server started")
})