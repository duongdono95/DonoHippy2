"use client";
import { PropsWithChildren } from "react";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalTheme } from "./GlobalTheme";
import { StyledEngineProvider } from "@mui/material";
const Provider = ({ children }: PropsWithChildren) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={GlobalTheme}>
        {children}
        <ToastContainer position="top-center" />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Provider;
