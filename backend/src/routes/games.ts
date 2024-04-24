import { Router } from "express";
import { GamesRepository } from "../usecases/games";

export const router = Router();

router.post("/create", async (req, res) => {
  const { gamerId, games } = req.body;

  const gamesUpdated = await GamesRepository.createGamesList(gamerId, games);

  res.status(200).json({ message: "game list updated!", data: gamesUpdated });
});

router.get("/get/:gamerId", async (req, res) => {
  const { gamerId } = req.params;

  const games = await GamesRepository.getGames(parseInt(gamerId));

  res.status(200).json({ data: games });
});

router.get("/match/:gamerId", async (req, res) => {
  const { gamerId } = req.params;

  const match = await GamesRepository.matchGames(parseInt(gamerId));

  res.status(200).json({ data: match });
});

router.get("/all", (req, res) => {
  const { search } = req.query;

  if (search) {
    const games = GamesRepository.searchForGame(search.toString());
    console.log(games);
    res.status(200).json({ data: games, nameSearched: search });
  }

  const games = GamesRepository.getAllGames();

  res.status(200).json({ data: games });
});
