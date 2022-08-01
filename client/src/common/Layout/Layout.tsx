import { Container, CssBaseline } from "@mui/material";
import { FC } from "react";
import { Nav } from "../components";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Nav />
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};
