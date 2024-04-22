import express from "express";
import cors from "cors";
import { GamerRepository } from "./usecases/gamer";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/create-gamer", async (req, res) => {
  const data = req.body;
  const { gamerTag, name, password } = data;

  const gamer = await GamerRepository.create(gamerTag, name, password);

  res
    .status(200)
    .json({ message: "created successfully", data: { gamerId: gamer.id } });
});

app.put("/update-gamer/:id", async (req, res) => {
  const data = req.body;
  const gamerId = parseInt(req.params.id);

  await GamerRepository.update(gamerId, data);

  res.status(200).json({ message: "updated successfully" });
});

app.delete("/delete-gamer/:id", async (req, res) => {
  const gamerId = parseInt(req.params.id);

  await GamerRepository.remove(gamerId);

  res.status(200).json({ message: "deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
