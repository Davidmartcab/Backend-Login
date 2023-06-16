import jwt from "jsonwebtoken";

export function createToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) reject(err);
                else resolve(token);
            }
        )
    })
}