import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import connectDB from "./config/db.js";

// connectDB();
dotenv.config();

const app = express();

// middleware
app.use(cors())
app.use(express.json());

// Routes

app.get("/", (req, res) => {
    res.send("main route");
});




const PORT = process.env.PORT || 5001;
app.listen( PORT, ()=> console.log(`server running on port ${PORT}`));

