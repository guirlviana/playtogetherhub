import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import MatchGamersPage from "./Pages/MatchGamersPage";
import ProfilePage from "./Pages/ProfilePage";
import HomePage from "./Pages/Home";
import Maintenance from "./Pages/Maintenance";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/match", element: <MatchGamersPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);


const startMaintenance = 9;
const endMaintenance = 22;

const now = new Date();
const currentHour = now.getHours();

const isAppActive =
  currentHour >= startMaintenance && currentHour < endMaintenance;

root.render(
  <React.StrictMode>
    {isAppActive ? <RouterProvider router={router} /> : <Maintenance />}
  </React.StrictMode>
);
