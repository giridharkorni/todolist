import db from "@/lib/db";
import bcrypt from "bcryptjs";


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, mobile, password } = req.body;
    if (!fullName || !email || !mobile || !password) {
      return res
        .status(400)
        .json({ message: "None of the fields can be empty" });
    } else {
      try {
        const [existingUsers] = await db.query(
          "SELECT email FROM users WHERE email = ?",
          [email]
        );
        if (existingUsers.length > 0) {
          return res.status(409).json({ message: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.execute(
          "insert into users (fullname,email,mobile,password) values (?,?,?,?)",
          [fullName, email, mobile, hashedPassword]
        );
        console.log("Inserted ID:", result.insertId);
        console.log("Rows affected:", result.affectedRows);
        return res.status(201).json({ message: "User Signup Successful" });
      } catch (err) {
        console.error("Signup error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } else {
    return res.status(405).json({ message: "Method Not Supported" });
  }
}
