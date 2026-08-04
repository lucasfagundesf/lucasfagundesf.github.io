import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Projetos } from "./pages/Projetos";
import { Contatos } from "./pages/Contatos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projetos",
    element: <Projetos />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/contatos",
    element: <Contatos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
