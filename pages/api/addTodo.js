import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Supperted" });
  }

  const { task, user_email } = req.body;
  if (!task) {
    return res.status(400).json({ message: "task Cannot be Empty" });
  }
  try {
    const [result] = await db.execute(
      "insert into todos (task, user_email) values (?,?)",
      [task, user_email]
    );
    console.log("Inserted ID:", result.insertId);
    console.log("Rows affected:", result.affectedRows);
    return res.status(201).json({ message: "Todo Task Added Successfully" });
  } catch (err) {
    console.log("Error while adding Todos: ", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
