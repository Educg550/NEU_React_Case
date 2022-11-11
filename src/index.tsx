import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import theme from "./styles/theme/colors";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { AuthProvider } from "./contexts/auth/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
