import { FC } from "react";
// mui
import { Container, CssBaseline } from "@mui/material";
// routes
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Movie,
  Recomended,
  RecommendedList,
  Settings,
} from "../../pages";
import { PublicRoutes } from "../constants/routes";
// components
import { Nav } from "../components";

export const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Nav />

      <Container maxWidth="xl">
        <Routes>
          <Route path={PublicRoutes.Home} element={<Home />} />
          <Route path={`${PublicRoutes.Home}/:id`} element={<Movie />} />
          <Route path={PublicRoutes.Settings} element={<Settings />} />
          <Route path={PublicRoutes.Recommended} element={<Recomended />} />
          <Route
            path={`${PublicRoutes.Recommended}/:id`}
            element={<RecommendedList />}
          />
        </Routes>
        <>{children}</>
      </Container>
    </div>
  );
};
