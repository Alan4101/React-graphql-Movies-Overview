import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "../theme";

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={mainTheme}>
      <Story />
    </ThemeProvider>
  ),
];
