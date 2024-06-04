import { Router, Request } from "express";
import { GamesAdapter } from "../usecases/games";
import { withAuth } from "../middlewares/withAuth";

export const router = Router();

type Session = { [key: string]: any };

type PlayTogetherhubRequest = Request & Session;

router.post(
  "/create-or-update",
  withAuth,
  async (req: PlayTogetherhubRequest, res) => {
    const { games } = req.body;
    const gamerId = req.session.gamerId;

    const gamesUpdated = await GamesAdapter.createOrUpdate(gamerId, games);

    res.status(200).json({ message: "game list updated!", data: gamesUpdated });
  }
);

router.get("/getList", withAuth, async (req: PlayTogetherhubRequest, res) => {
  const gamerId = req.session.gamerId;

  const games = await GamesAdapter.get(gamerId);

  res.status(200).json({ data: games });
});

router.get("/match/:gamerId", withAuth, async (req, res) => {
  const { gamerId } = req.params;

  const match = await GamesAdapter.match(parseInt(gamerId));

  res.status(200).json({ data: match });
});

router.get("/all", (req, res) => {
  const { search } = req.query;

  if (search) {
    const games = GamesAdapter.search(search.toString());
    res.status(200).json({ data: games, nameSearched: search });
  }

  const games = GamesAdapter.getAll();

  res.status(200).json({ data: games });
});
