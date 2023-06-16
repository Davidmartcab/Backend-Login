import dotenv from "dotenv";
dotenv.config()

import app from "./app.js";
import { connectDB } from "./db.js";

let rand = random(100)
process.env.JWT_SECRET = rand

console.log(process.env.JWT_SECRET)

app.listen(process.env.PORT, () => {
    console.log(`>>> Server running on port: ${process.env.PORT}`)
    connectDB()
})

function random(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}