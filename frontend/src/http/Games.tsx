import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const searchGames = () => {
  return axios.get(BASE_URL + "/games/all");
};
