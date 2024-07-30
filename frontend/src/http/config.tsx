import axios from "axios";
import { logout } from "./Gamer";

const BACKEND_URL_BY_ENVIROMENT = {
  development: "http://localhost:3001",
  test: "http://localhost:3001",
  production: "https://playtogetherhubapi.gvianadev.com",
};
const ENVIROMENT = process.env.NODE_ENV;

// const BASE_URL = BACKEND_URL_BY_ENVIROMENT[ENVIROMENT];
const BASE_URL = "https://playtogetherhubapi.gvianadev.com"

export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Token: localStorage.getItem("token") ?? null,
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
