import axios from "axios";
import { BASE_URL } from "./config";

type CreateGamer = {
  gamerTag: string;
  name: string;
  password: string;
  favoriteGameId: number;
};

export const createGamer = ({
  gamerTag,
  name,
  password,
  favoriteGameId,
}: CreateGamer) => {
  return axios.post(
    BASE_URL + "/gamer/create",
    {
      gamerTag,
      name,
      password,
      favoriteGameId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
