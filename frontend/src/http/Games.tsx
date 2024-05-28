import axios from "axios";
import { BASE_URL } from "./config";

export const searchGames = () => {
  return axios.get(BASE_URL + "/games/all");
};

export const matchGamers = (gamerId: number) => {
  return axios.post(
    BASE_URL + "/gamer/match",
    { gamerId },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
