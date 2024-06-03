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

export const login = (gamerTag: string, password: string) => {
  return axios.post(
    BASE_URL + "/gamer/login",
    {
      gamerTag,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getAllGamers = (gamerId: number) => {
  return axios.get(BASE_URL + `/gamer/all/${gamerId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getGamer = (gamerId: number, token: string | null) => {
  return axios.get(BASE_URL + `/gamer/get/${gamerId}`, {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  });
};

type editData = {
  name?: string;
  gamerTag?: string;
};

export const editGamer = (
  gamerId: number,
  data: editData,
  token: string | null
) => {
  return axios.put(
    BASE_URL + `/gamer/update/${gamerId}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );
};
