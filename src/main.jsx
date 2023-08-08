import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import APPRoutes from "./routes/APPRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <APPRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
