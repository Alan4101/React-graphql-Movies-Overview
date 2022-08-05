import { FC } from "react";
// material ui
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./common/Layout/Layout";
import { Home, Recomended, Settings } from "./pages";
import { LanguageContextProvider } from "./services/context/LanguageContext";

// icon

export const App: FC = () => {
  return (
    <BrowserRouter>
      <LanguageContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recomended" element={<Recomended />} />
          </Routes>
        </Layout>
      </LanguageContextProvider>
    </BrowserRouter>
  );
};

export default App;
