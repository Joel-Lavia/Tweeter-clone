import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profil from "./pages/Profil";
import DataSharing from "./components/DataSharing";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/Profil",
    element:<Profil />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataSharing>
    <RouterProvider router={router}/>
    </DataSharing>
  </React.StrictMode>
);
