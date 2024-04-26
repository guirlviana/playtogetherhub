import jwt from "jsonwebtoken";

export function withAuth(req: { headers: any }, res: any, next: () => void) {
  const { token } = req.headers;
  if (!token) return res.status(401).json({ token: "No token provided" });
    
  console.log(token, "token");
  next();
}
