import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

/*
    Codes:
    200: OK
    201: Created
    400: Bad Request
    404: Not Found
    500: Internal Server Error
*/

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Encrypt password
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const userSaved = await newUser.save();

        const token = await createToken({ id: userSaved._id });

        res.cookie("token", token)
        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong creating a user"
        });
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const matchPassword = await bcrypt.compare(password, userFound.password);

        if (!matchPassword) return res.status(400).json({ message: "Incorrect password" });

        const token = await createToken({ id: userFound._id });

        res.cookie("token", token)
        res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong creating a user"
        });
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ message: "User logged out" })
}

export const profile = async (req, res) => {

    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const newToken = await createToken({ id: userFound._id });

    res.cookie("token", newToken)
    res.status(200).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
    })
}

export const verify = async (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });

        res.status(200).json({ message: "User verified", user: decoded.id })
    })
}