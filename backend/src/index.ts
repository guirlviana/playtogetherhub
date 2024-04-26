import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router as gamerRoutes } from "./routes/gamer";
import { router as gamesRoutes } from "./routes/games";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Sorry can't find that!" });
});

app.use("/gamer", gamerRoutes);
app.use("/games", gamesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
