import axios from "axios";

export const searchGames = () => {
  return axios.get("/games/all");
};

export const matchFellowGamers = (token: string | null) => {
  return axios.get("/games/match", {
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
  return axios.post(
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

export const getGamerList = (token: string | null) => {
  return axios.get("/games/getList", {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
};
