import { Game, GameModel } from "../types/games";
import { games } from "../common/games";
import { orm } from "../../prisma/prismaClient";

const searchForGame = (nameSearched: string): null | Game => {
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const nameFormatted = game.name.replace(/\s+/g, "");
    const nameSearchedFormatted = nameSearched.replace(/\s+/g, "");

    if (nameFormatted.includes(nameSearchedFormatted)) {
      return game;
    }
  }

  return null;
};

export async function createGameList(
  gamerId: number,
  games: GameModel[]
): Promise<GameModel[]> {
  const gamesStored = await orm.games.findMany({ where: { gamerId: gamerId } });
  const gamesIdsStored = new Set(gamesStored.map((game) => game.externalCode));
  const newGamesIds = new Set(games.map((game) => game.externalCode));

  const gamesToRemove = new Set(
    [...gamesIdsStored].filter((id) => !newGamesIds.has(id))
  );
  const gamesToCreate = new Set(
    [...newGamesIds].filter((id) => !gamesIdsStored.has(id))
  );

  await orm.games.deleteMany({
    where: {
      externalCode: { in: Array.from(gamesToRemove) },
      gamerId: gamerId,
    },
  });

  const newGames = games
    .filter((game) => [...gamesToCreate].includes(game.externalCode))
    .map((game) => ({ ...game, gamerId }));

  await orm.games.createMany({ data: newGames });

  const gamesUpdated = await orm.games.findMany({
    where: { gamerId: gamerId },
  });

  return gamesUpdated;
}

export async function getGames(gamerId: number): Promise<GameModel[]> {
  const games = await orm.games.findMany({
    where: { gamerId: gamerId },
  });

  return games;
}

export async function matchGames(gamerId: number) {
  const externalCodes = await orm.games.findMany({
    where: { gamerId: gamerId },
    select: { externalCode: true },
  });

  const games = await orm.games.groupBy({
    by: ["gamerId"],
    where: {
      gamerId: { not: gamerId },
      externalCode: { in: externalCodes.map((code) => code.externalCode) },
    },
    orderBy: {
      _count: {
        gamerId: "desc",
      },
    },
  });

  console.log(games);
}
