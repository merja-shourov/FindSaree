import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import authRoutes from './routes/authRoutes.js'

import connectDB from "./config/db.js";
connectDB();

const app = express();

// middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5001;
app.listen( PORT, ()=> console.log(`server running on port ${PORT}`));

