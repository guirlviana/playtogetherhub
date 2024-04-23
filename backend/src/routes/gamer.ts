import { Router } from "express";
import { GamerRepository } from "../usecases/gamer";

export const router = Router();

router.post("/create-gamer", async (req, res) => {
  const data = req.body;
  const { gamerTag, name, password } = data;

  const gamer = await GamerRepository.create(gamerTag, name, password);

  res
    .status(200)
    .json({ message: "created successfully", data: { gamerId: gamer.id } });
});

router.put("/update-gamer/:id", async (req, res) => {
  const data = req.body;
  const gamerId = parseInt(req.params.id);

  await GamerRepository.update(gamerId, data);

  res.status(200).json({ message: "updated successfully" });
});

router.delete("/delete-gamer/:id", async (req, res) => {
  const gamerId = parseInt(req.params.id);

  await GamerRepository.remove(gamerId);

  res.status(200).json({ message: "deleted successfully" });
});
