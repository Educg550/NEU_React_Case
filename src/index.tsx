import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import theme from "./styles/theme/colors";
import { ThemeProvider } from "styled-components";

import Login from "./Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>
);
