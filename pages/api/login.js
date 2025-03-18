import db from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email or Password cannot be empty" });
    } else {
      try {
        const [rows] = await db.query("select * from users where email = ?", [
          email,
        ]);
        if (rows.length === 0) {
          return res.status(401).json({ message: "User Not Found" });
        }
        const user = rows[0];
        const hashedPassword = user.password;
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid Email or Password" });
        }
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        const cookie = serialize("authToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 3600,
        });
        res.setHeader("Set-Cookie", cookie);
        return res
          .status(200)
          .json({ message: "Login Successful", token: token });
      } catch (err) {
        console.log("Database Failure", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } else {
    return res.status(405).json({ message: "Method Not Supported" });
  }
}

// mysql://root:HMNdrYUUWIqVeGeKoiDDIYXukHcSuKnP@yamabiko.proxy.rlwy.net:41451/railway
