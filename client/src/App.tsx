import { FC } from "react";
// material ui
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./theme";

import { BrowserRouter } from "react-router-dom";
// import componnents
import { LanguageContextProvider } from "./common/components";
import { Layout } from "./common/Layout/Layout";

//Routes

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <LanguageContextProvider>
          <Layout />
        </LanguageContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
