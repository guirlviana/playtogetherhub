import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const searchGames = () => {
  return axios.get(BASE_URL + "/games/all");
};
