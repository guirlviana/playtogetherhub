import axios from "axios";
import { BASE_URL } from "./config";

export const searchGames = () => {
  return axios.get(BASE_URL + "/games/all");
};

export const matchFellowGamers = (gamerId: number, token: string | null) => {
  return axios.get(BASE_URL + `/games/match/${gamerId}`, {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
};

export const createOrUpdateGames = (
  gamerId: number,
  games: { id: number; gamerId: number; externalCode: number }[],
  token: string | null
) => {
  return axios.post(
    BASE_URL + "/create-or-update",
    {
      gamerId,
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

export const getGamerList = (gamerId: number) => {
  return axios.get(BASE_URL + `/games/getList/${gamerId}`);
};
