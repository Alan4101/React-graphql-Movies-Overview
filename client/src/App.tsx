import { FC } from "react";
// material ui
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./common/Layout/Layout";
import { Home, Recomended, Settings } from "./pages";

// icon

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="recomended" element={<Recomended />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
