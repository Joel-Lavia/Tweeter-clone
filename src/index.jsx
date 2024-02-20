import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profil from "./pages/Profil";
import DataSharing from "./components/DataSharing";
import ProfilFollow from "./components/ProfilFollow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <p className="text-red-800 font-bold text-7xl text-center">
        page in development phase
      </p>
    ),
  },
  {
    path: "/Profil",
    element: <Profil />,
  },
  {
    path: "ProfilFollow/:userId",
    element: <ProfilFollow />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataSharing>
      <RouterProvider router={router} />
    </DataSharing>
  </React.StrictMode>
);
