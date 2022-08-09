import { FC, useContext, useState } from "react";
// mui
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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

import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
// lib
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// other
import { LanguageContext } from "../../../services/context/LanguageContext";
import { changeLanguage } from "../../../utils/utils";

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

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <Link component={RouterLink} to="settings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={t("home.settings")} />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary={t("home.language")} />
            {dropdown()}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
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
            <Button sx={{ my: 2, display: "block" }}>
              <Link
                sx={{ color: "#fff", textDecoration: "none" }}
                component={RouterLink}
                to="settings"
              >
                {t("page.settings")}
              </Link>
            </Button>
            <Button sx={{ my: 2, display: "block" }}>
              <Link
                sx={{ color: "#fff", textDecoration: "none" }}
                component={RouterLink}
                to="recomended"
              >
                {t("page.recomended")}
              </Link>
            </Button>
            {dropdown()}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor={"left"} open={isDrawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </Box>
  );
};
