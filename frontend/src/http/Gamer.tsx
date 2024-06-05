import axios from "axios";

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
    "/gamer/create",
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
    "/gamer/login",
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

export const getAllGamers = () => {
  return axios.get("/gamer/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getGamer = (token: string | null) => {
  return axios.get("/gamer/get", {
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

export const editGamer = (data: editData, token: string | null) => {
  return axios.put(
    "/gamer/update",
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );
};
