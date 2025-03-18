import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Supported" });

  try {
    const { id } = req.body;
    await db.query("DELETE FROM todos WHERE id = ?", [id]);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.log("Error deleting todo:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
