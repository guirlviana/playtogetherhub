import axios from "axios";
import { BASE_URL } from "./config";

export const searchGames = () => {
  return axios.post(BASE_URL + "/games/all");
};
