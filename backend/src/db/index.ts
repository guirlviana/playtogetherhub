import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.HOST,
  port: parseInt(process.env.PORT || "5432"),
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

export const query = (text: string) => pool.query(text);
