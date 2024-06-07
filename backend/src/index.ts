import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router as gamerRoutes } from "./routes/gamer";
import { router as gamesRoutes } from "./routes/games";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use("/gamer", gamerRoutes);
app.use("/games", gamesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
