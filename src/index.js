import dotenv from "dotenv";
dotenv.config()

import app from "./app.js";
import { connectDB } from "./db.js";


app.listen(process.env.PORT, () => {
    console.log(`>>> Server running on port: ${process.env.PORT}`)
    connectDB()
})