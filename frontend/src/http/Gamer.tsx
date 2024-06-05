import { httpService } from "./config";

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
  return httpService.post(
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
  return httpService.post(
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
  return httpService.get("/gamer/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getGamer = (token: string | null) => {
  return httpService.get("/gamer/get");
};

type editData = {
  name?: string;
  gamerTag?: string;
};

export const editGamer = (data: editData, token: string | null) => {
  return httpService.put(
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
