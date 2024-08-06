import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { RecoilRoot } from "recoil";
import { AuthContextProvider } from "../context/AuthContext.jsx";
import router from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
