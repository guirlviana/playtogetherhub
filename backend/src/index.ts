import express from "express";
import cors from "cors";
import { createGamer, updateGamer } from "./usecases/gamer";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/create-gamer", async (req, res) => {
  const data = req.body;
  const { gamerTag, name, password } = data;

  const gamer = await createGamer(gamerTag, name, password);

  res
    .status(200)
    .json({ message: "created successfully", data: { gamerId: gamer.id } });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
