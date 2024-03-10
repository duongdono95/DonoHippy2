"use client";
import { ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { GlobalTheme } from "./GlobalThemes";
import "./globals.css";
const GlobalStyles = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyles;
