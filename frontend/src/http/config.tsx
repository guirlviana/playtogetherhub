import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Token: localStorage.getItem("token") ?? null,
    "Content-Type": "application/json",
  },
});
