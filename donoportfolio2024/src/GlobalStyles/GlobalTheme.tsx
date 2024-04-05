"use client";
import { createTheme } from "@mui/material/styles";

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: `rgba(var(--primary-code))`,
    },
  },
  components: {
    // // ------------------------------------General buttons
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 12,
          borderRadius: "50px",
          fontWeight: "normal",
        },
        containedPrimary: {
          color: "var(--black05)",
        },
        outlinedPrimary: {
          border: "1px solid rgba(var(--primary-code))",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
