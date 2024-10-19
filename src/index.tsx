import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { globalTheme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { StoreProvider } from "./context/mobxContext";
import { RootStore } from "./mobx/RootStore";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = new RootStore();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
