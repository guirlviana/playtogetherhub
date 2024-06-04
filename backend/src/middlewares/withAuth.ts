import "dotenv/config";
import jwt from "jsonwebtoken";

export function withAuth(
  req: { headers: any; session?: { [key: string]: any } },
  res: any,
  next: () => void
) {
  const { token } = req.headers;
  if (!token) return res.status(401).json({ token: "No token provided" });

  const secret = String(process.env.LOGIN_SECRET_KEY);

  try {
    const decoded = jwt.verify(token, secret) as { [key: string]: any };
    req.session = { gamerId: decoded.gamerId };
    next();
  } catch {
    return res.status(401).json({ token: "Invalid token provided" });
  }
}
