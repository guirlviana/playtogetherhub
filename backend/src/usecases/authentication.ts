import { orm } from "../../prisma/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export async function login(gamerTag: string, password: string) {
  const gamer = await orm.gamer.findUnique({ where: { gamerTag: gamerTag } });
  if (!gamer) return false;

  const result = bcrypt.compareSync(password, gamer.password);
  if (!result) return false;

  const secret = String(process.env.LOGIN_SECRET_KEY);
  const token = jwt.sign({ gamerId: gamer.id }, secret, {
    expiresIn: "4h",
  });

  return token;
}
