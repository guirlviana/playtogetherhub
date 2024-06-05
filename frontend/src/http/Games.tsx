import { httpService } from "./config";

export const searchGames = () => {
  return httpService.get("/games/all");
};

export const matchFellowGamers = () => {
  return httpService.get("/games/match");
};

export const createOrUpdateGames = (games: { externalCode: number }[]) => {
  return httpService.post("/games/create-or-update", {
    games,
  });
};

export const getGamerList = () => {
  return httpService.get("/games/getList");
};
