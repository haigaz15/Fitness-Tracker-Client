import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { globalTheme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
