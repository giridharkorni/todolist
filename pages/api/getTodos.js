import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Supported" });
  try {
    const { user_email } = req.body;
    const [rows] = await db.query("select * from todos where user_email = ?", [
      user_email,
    ]);
    return res.status(200).json({ message: "Data Fetched Successfully", rows });
  } catch (err) {
    console.log("Error while retrieving todos: ", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
