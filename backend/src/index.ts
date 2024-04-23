import express from "express";
import cors from "cors";
import { router as gamerRoutes } from "./routes/gamer";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/gamer", gamerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
