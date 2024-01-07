import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const callVar = (varName: string) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
};

console.log(callVar("--primary-code"));
console.log("hello");
export const GlobalTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: `rgba(${callVar("--primary-code")})`,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: `rgba(${callVar("--secondary")})`,
        },
      },
    },
  },
  typography: {
    fontFamily: [callVar("--font-family")].join(","),
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
    // // ------------------------------------General buttons
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 12,
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
  },
});
