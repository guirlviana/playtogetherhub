import { Router } from "express";
import { GamesRepository } from "../usecases/games";
import { withAuth } from "../middlewares/withAuth";

export const router = Router();

router.post("/create", withAuth, async (req, res) => {
  const { gamerId, games } = req.body;

  const gamesUpdated = await GamesRepository.create(gamerId, games);

  res.status(200).json({ message: "game list updated!", data: gamesUpdated });
});

router.get("/get/:gamerId", withAuth, async (req, res) => {
  const { gamerId } = req.params;

  const games = await GamesRepository.get(parseInt(gamerId));

  res.status(200).json({ data: games });
});

router.get("/match/:gamerId", withAuth, async (req, res) => {
  const { gamerId } = req.params;

  const match = await GamesRepository.match(parseInt(gamerId));

  res.status(200).json({ data: match });
});

router.get("/all", withAuth, (req, res) => {
  const { search } = req.query;

  if (search) {
    const games = GamesRepository.search(search.toString());
    console.log(games);
    res.status(200).json({ data: games, nameSearched: search });
  }

  const games = GamesRepository.getAll();

  res.status(200).json({ data: games });
});
