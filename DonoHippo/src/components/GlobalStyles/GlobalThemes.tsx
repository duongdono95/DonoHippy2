"use client";

import { createTheme } from "@mui/material";
export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: `rgb(var(--primary-code))`,
    },
    secondary: {
      main: `rgb(var(--secondary-code))`,
    },
    error: {
      main: `rgba(255, 0, 0, 1)`,
    },
    success: {
      main: `rgba(var(--success-code))`,
    },
    warning: {
      main: `rgba(var(--warning-code))`,
    },
    info: {
      main: `rgba(var(--info-code))`,
    },
  },
  components: {
    //  ------------------------------------FORM LABEL
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 500,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          color: "white",
        },
      },
    },
    // // ------------------------------------General buttons
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
        containedPrimary: {
          color: "white",
        },
        contained: {
          boxShadow: "2px 2px 5px var(--black03)",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    // ------------------------------------Form Select
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: 12,
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
        },
      },
    },
    // // ------------------------------------Form Select Dropdown Option
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    // // ------------------------------------Form Input
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 12,
        },
      },
    },

    //  -------------------------------------------- ToolTip
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          cursor: "pointer",
        },
      },
    },
    // ---------------------------------------Toggle Buttons
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: 12,
          fontWeight: 600,
          padding: 0,
        },
      },
    },
    // ---------------------------------------Avatar/ Avatar Group
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 30,
          height: 30,
          fontSize: 14,
          border: "none !important",
          boxShadow:
            "2px 2px 5px var(--black05), inset 2px 2px 5px var(--black01), inset -2px -2px 5px var(--white05)",
          cursor: "pointer",
          ":hover": {
            transform: "scale(1.1)",
            boxShadow:
              "2px 2px 5px var(--black05), inset -2px -2px 5px var(--black01), inset 2px 2px 5px var(--white05)",
          },
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          gap: "5%",
        },
      },
    },
  },
});
