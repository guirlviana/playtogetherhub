import { Router } from "express";
import { GamerRepository } from "../usecases/gamer";

export const router = Router();

router.post("/create", async (req, res) => {
  const { gamerTag, name, password } = req.body;

  const gamer = await GamerRepository.create(gamerTag, name, password);

  res
    .status(200)
    .json({ message: "created successfully", data: { gamerId: gamer.id } });
});

router.put("/update/:id", async (req, res) => {
  const data = req.body;
  const gamerId = parseInt(req.params.id);

  const gamerUpdated = await GamerRepository.update(gamerId, data);

  res.status(200).json({ message: "updated successfully", data: gamerUpdated });
});

router.delete("/delete/:id", async (req, res) => {
  const gamerId = parseInt(req.params.id);

  await GamerRepository.remove(gamerId);

  res.status(200).json({ message: "deleted successfully" });
});

router.get("/get/:id", async (req, res) => {
  const gamerId = parseInt(req.params.id);

  const gamer = await GamerRepository.get(gamerId);

  res.status(200).json({ message: "get successfully", data: gamer });
});
