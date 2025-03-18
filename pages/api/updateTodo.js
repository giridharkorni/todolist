import db from "@/lib/db";
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Supported" });

  try {
    const { id, task, is_completed } = req.body;

    if (task !== undefined) {
      await db.query("UPDATE todos SET task = ? WHERE id = ?", [task, id]);
      return res.status(200).json({ message: "Task updated successfully" });
    }

    if (is_completed !== undefined) {
      await db.query("UPDATE todos SET is_completed = ? WHERE id = ?", [
        is_completed,
        id,
      ]);
      return res.status(200).json({ message: "Task completion toggled" });
    }
  } catch (err) {
    console.log("Error updating todo:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
