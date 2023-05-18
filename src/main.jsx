import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthPorviders from "./providers/AuthPorviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorviders>
      <RouterProvider router={router} />
    </AuthPorviders>
  </React.StrictMode>
);
