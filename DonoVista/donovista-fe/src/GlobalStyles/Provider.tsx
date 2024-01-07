import React from "react";
import "./GlobalStyles.scss";

import { GlobalTheme } from "./GlobalThemes";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
const Provider = ({ children }: any) => {
  return (
    <CssVarsProvider theme={GlobalTheme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default Provider;
