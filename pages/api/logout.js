import { serialize } from "cookie";

export default function handler(req, res) {
  const cookieOptions = serialize("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  res.setHeader("Set-Cookie", cookieOptions);
  return res.status(200).json({ message: "Logged Out Successfully" });
}
