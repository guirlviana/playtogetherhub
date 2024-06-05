import axios from "axios";
import { BASE_URL } from "./config";

export const searchGames = () => {
  return axios.get(BASE_URL + "/games/all");
};

export const matchFellowGamers = (token: string | null) => {
  return axios.get(BASE_URL + `/games/match`, {
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
    BASE_URL + "/games/create-or-update",
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
  return axios.get(BASE_URL + `/games/getList`, {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
};
