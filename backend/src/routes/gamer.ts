import { Router, Request } from "express";
import { GamerAdapter } from "../usecases/gamer";
import { login } from "../usecases/authentication";
import { withAuth } from "../middlewares/withAuth";
import { GamesAdapter } from "../usecases/games";

export const router = Router();

type Session = { [key: string]: any };

type PlayTogetherhubRequest = Request & Session;

router.post("/login", async (req, res) => {
  const { gamerTag, password } = req.body;

  const token = await login(gamerTag, password);
  if (!token) return res.status(401).json({ message: "invalid credentials" });

  res.status(200).json({ token: token });
});

router.post("/create", async (req, res) => {
  const { gamerTag, name, password, favoriteGameId } = req.body;

  const gamer = await GamerAdapter.create(gamerTag, name, password);
  if (!gamer) {
    res
      .status(409)
      .json({ message: `gamerTag: "${gamerTag}" in use, try another!` });
    return;
  }

  await GamesAdapter.createOrUpdate(gamer.id, [
    { externalCode: favoriteGameId, gamerId: gamer.id },
  ]);

  res
    .status(200)
    .json({ message: "created successfully", data: { gamerId: gamer.id } });
});

router.put("/update", withAuth, async (req: PlayTogetherhubRequest, res) => {
  const data = req.body;
  const gamerId = req.session.gamerId;

  const gamerUpdated = await GamerAdapter.update(gamerId, data);

  res.status(200).json({ message: "updated successfully", data: gamerUpdated });
});

router.delete("/delete", withAuth, async (req: PlayTogetherhubRequest, res) => {
  const gamerId = req.session.gamerId;

  await GamerAdapter.remove(gamerId);

  res.status(200).json({ message: "deleted successfully" });
});

router.get("/get", withAuth, async (req: PlayTogetherhubRequest, res) => {
  const gamerId = req.session.gamerId;

  const gamer = await GamerAdapter.get(gamerId);

  res.status(200).json({ message: "get successfully", data: gamer });
});

router.get("/all", withAuth, async (req: PlayTogetherhubRequest, res) => {
  const gamerId = req.session?.gamerId;

  const gamers = await GamerAdapter.getAll(gamerId);

  res.status(200).json({ message: "get successfully", data: gamers });
});
