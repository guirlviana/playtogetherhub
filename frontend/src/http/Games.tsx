import { httpService } from "./config";

export const searchGames = () => {
  return httpService.get("/games/all");
};

export const matchFellowGamers = (token: string | null) => {
  return httpService.get("/games/match", {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
};

export const createOrUpdateGames = (
  games: { externalCode: number }[],
  token: string | null
) => {
  return httpService.post(
    "/games/create-or-update",
    {
      games,
    },
    {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );
};

export const getGamerList = () => {
  return httpService.get("/games/getList");
};
