import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Supported" });
  try {
    await db.query(`
          CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            fullname VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            mobile VARCHAR(15) NOT NULL,
            password VARCHAR(255) NOT NULL
          )
        `);

    await db.query(`
          CREATE TABLE IF NOT EXISTS todos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_email VARCHAR(100) NOT NULL,
            task TEXT NOT NULL,
            is_completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_email) REFERENCES users(email) ON DELETE CASCADE
          )
        `);

    res.status(200).json({ message: "Tables created successfully" });
  } catch (error) {
    console.log("Error Occured", error);
    res
      .status(500)
      .json({ message: "Error creating tables", error: error.message });
  }
}
