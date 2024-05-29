import axios from "axios";
import { BASE_URL } from "./config";

export const searchGames = () => {
  return axios.get(BASE_URL + "/games/all");
};

export const matchFellowGamers = (gamerId: number) => {
  return axios.get(BASE_URL + `/games/match/${gamerId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
