import { FC, useState } from "react";
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
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

type Languages = "en-US" | "uk-UA";
export const Nav: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [language, setLanguage] = useState<Languages>("en-US");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as Languages);
  };
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <Link component={RouterLink} to="settings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
        </Link>
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
              Movies recomendation
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
                Settings
              </Link>
            </Button>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="label-language"
                value={language}
                onChange={handleChange}
                label=""
                displayEmpty
              >
                <MenuItem value="">EN</MenuItem>
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>UA</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor={"left"} open={isDrawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </Box>
  );
};
