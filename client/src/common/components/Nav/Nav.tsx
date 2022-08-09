import { FC, useContext, useState } from "react";
// mui
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Hidden,
  Link,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
//icon & style
import classes from "./Nav.module.css";

import MenuIcon from "@mui/icons-material/Menu";
// lib
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// other
import { LanguageContext } from "../../../services/context/LanguageContext";
import { changeLanguage } from "../../../utils/utils";
import { MenuSidebar } from "../MenuSideBar/MenuSideBar";

type Languages = "en-US" | "uk-UA";

export const Nav: FC = () => {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const context = useContext(LanguageContext);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleChange = (event: SelectChangeEvent) => {
    context?.dispatch({
      type: "setLocale",
      payload: event.target.value as Languages,
    });
    i18n.changeLanguage(changeLanguage(event.target.value));
  };

  const dropdown = () => (
    <Select
      variant="standard"
      labelId="label-language"
      value={context?.state.locale || "en-US"}
      onChange={handleChange}
      label=""
      displayEmpty
      MenuProps={{
        classes: { paper: classes.dropdownSelect },
        variant: "menu",
      }}
      sx={{
        border: "none !important",
        outline: "none !important",
        color: "#fff",

        fontSize: "14px",
      }}
    >
      <MenuItem value="en-US">EN</MenuItem>
      <MenuItem value="uk-UA">UA</MenuItem>
    </Select>
  );

  return (
    <Box sx={{ width: "250" }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Hidden only={["lg", "xl"]}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link component={RouterLink} to="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#fff", flexGrow: 1 }}
            >
              {t("home.header")}
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "left",
            }}
          >
            <MenuSidebar toggleDrawer={toggleDrawer} isSideBar={false}>
              {dropdown()}
            </MenuSidebar>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor={"left"} open={isDrawerOpen} onClose={toggleDrawer}>
        <MenuSidebar toggleDrawer={toggleDrawer} isSideBar={true}>
          {dropdown()}
        </MenuSidebar>
      </Drawer>
    </Box>
  );
};
