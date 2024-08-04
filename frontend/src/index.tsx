import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import MatchGamersPage from "./Pages/MatchGamersPage";
import ProfilePage from "./Pages/ProfilePage";
import HomePage from "./Pages/Home";
import MaintenancePage from "./Pages/MaintenancePage";
import { isOnMaintenanceTime } from "./Utils/maintenanceTime";

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

root.render(
  <React.StrictMode>
    {isOnMaintenanceTime() ? (
      <MaintenancePage />
    ) : (
      <RouterProvider router={router} />
    )}
  </React.StrictMode>
);
