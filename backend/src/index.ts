import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import cors from "cors";
import { router as gamerRoutes } from "./routes/gamer";
import { router as gamesRoutes } from "./routes/games";

const app = express();
const PORT = 3001;

app.use(express.json());

const isProduction = parseInt(process.env.IS_PRODUCTION || "1");
const corsProduction = {
  origin:
    "https://playtogetherhub-b8qn519xf-guilherme-vianas-projects-af351a31.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const corsConfig = isProduction ? corsProduction : {};
app.use(cors(corsConfig));

app.use("/gamer", gamerRoutes);
app.use("/games", gamesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
