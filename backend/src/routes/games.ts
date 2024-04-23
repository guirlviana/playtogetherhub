import { Router } from "express";
import { createGameList, getGames, matchGames } from "../usecases/games";

export const router = Router();

router.post("/create", async (req, res) => {
  const { gamerId, games } = req.body;

  const gamesUpdated = await createGameList(gamerId, games);

  res.status(200).json({ message: "game list updated!", data: gamesUpdated });
});

router.get("/get/:gamerId", async (req, res) => {
  const { gamerId } = req.params;

  const games = await getGames(parseInt(gamerId));

  res.status(200).json({ data: games });
});

router.get("/match/:gamerId", async (req, res) => {
  const { gamerId } = req.params;

  const match = await matchGames(parseInt(gamerId));

  res.status(200).json({ data: match });
});
