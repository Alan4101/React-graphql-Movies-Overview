import { FC } from "react";
// material ui
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./theme";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import componnents
import { LanguageContextProvider } from "./common/components";
import { Layout } from "./common/Layout/Layout";
import { Home, Movie, Recomended, Settings } from "./pages";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <LanguageContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Movie />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recomended" element={<Recomended />} />
            </Routes>
          </Layout>
        </LanguageContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
