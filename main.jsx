import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { TourismProvider } from "./TourismContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourismProvider>
      <App />
    </TourismProvider>
  </React.StrictMode>
);