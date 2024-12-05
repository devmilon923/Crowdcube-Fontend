import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contextApi/AuthContext.jsx";
import { DataContextProvider } from "./contextApi/DataContext.jsx";
import "./index.css";
import { router } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <DataContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </DataContextProvider>
    </ContextProvider>
  </StrictMode>
);
