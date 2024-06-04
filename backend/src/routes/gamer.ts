import { Router, Request } from "express";
import { GamerAdapter } from "../usecases/gamer";
import { login } from "../usecases/authentication";
import { withAuth } from "../middlewares/withAuth";
import { GamesAdapter } from "../usecases/games";

export const router = Router();

type PlayTogetherhubRequest = Request & {
  session?: { gamerId: string };
};

router.post("/login", async (req, res) => {
  const { gamerTag, password } = req.body;

  const token = await login(gamerTag, password);
  if (!token) return res.status(401).json({ message: "invalid credentials" });

  res.status(200).json({ token: token });
});

router.post("/create", async (req, res) => {
  const { gamerTag, name, password, favoriteGameId } = req.body;

  const gamer = await GamerAdapter.create(gamerTag, name, password);
  await GamesAdapter.createOrUpdate(gamer.id, [
    { externalCode: favoriteGameId, gamerId: gamer.id },
  ]);

  res
    .status(200)
    .json({ message: "created successfully", data: { gamerId: gamer.id } });
});

router.put("/update/:id", withAuth, async (req, res) => {
  const data = req.body;
  const gamerId = parseInt(req.params.id);

  const gamerUpdated = await GamerAdapter.update(gamerId, data);

  res.status(200).json({ message: "updated successfully", data: gamerUpdated });
});

router.delete("/delete/:id", withAuth, async (req, res) => {
  const gamerId = parseInt(req.params.id);

  await GamerAdapter.remove(gamerId);

  res.status(200).json({ message: "deleted successfully" });
});

router.get("/get/:id", withAuth, async (req: PlayTogetherhubRequest, res) => {
  const gamerId = parseInt(req.params.id);

  const gamer = await GamerAdapter.get(gamerId);

  res.status(200).json({ message: "get successfully", data: gamer });
});

router.get("/all/:gamerId", async (req, res) => {
  const { gamerId } = req.params;

  const gamers = await GamerAdapter.getAll(parseInt(gamerId));

  res.status(200).json({ message: "get successfully", data: gamers });
});
