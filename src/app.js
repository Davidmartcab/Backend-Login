import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

const app = express()

// Show the connections in the console
app.use(morgan("dev"));

app.use(cors())

// Set the json format
app.use(express.json());

// Set the cookie parser
app.use(cookieParser());

// Set the routes for the auth
app.use('/api', authRoutes);

export default app;