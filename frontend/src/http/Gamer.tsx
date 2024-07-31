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
  return httpService.post("/gamer/create", {
    gamerTag,
    name,
    password,
    favoriteGameId,
  });
};

export const login = (gamerTag: string, password: string) => {
  return httpService.post("/gamer/login", {
    gamerTag,
    password,
  });
};

export const logout = () => {
  localStorage.setItem("token", "");
};

export const getAllGamers = () => {
  return httpService.get("/gamer/all");
};

export const getGamer = () => {
  return httpService.get("/gamer/get");
};

type editableFields = {
  name?: string;
  gamerTag?: string;
};

export const editGamer = (data: editableFields) => {
  return httpService.put("/gamer/update", { ...data });
};
