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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";

export const Nav: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor={"left"} open={isDrawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </Box>
  );
};
