import { FC, ReactNode } from "react";
// mui
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { menuItem } from "../Nav/Nav.helper";
import { Link as RouterLink } from "react-router-dom";

interface MenuSidebarProps {
  isSideBar: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
}
export const MenuSidebar: FC<MenuSidebarProps> = ({
  isSideBar,
  toggleDrawer,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {isSideBar ? (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {menuItem.map((item) => (
              <Link component={RouterLink} to={item.route} key={item.route}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={t(item.title)} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary={t("home.language")} />
                {children}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ) : (
        <>
          {menuItem.map((item) => (
            <Button key={item.route} sx={{ my: 2, display: "block" }}>
              <Link
                sx={{ color: "#fff", textDecoration: "none" }}
                component={RouterLink}
                to={item.route}
              >
                {t(item.title)}
              </Link>
            </Button>
          ))}
          {children}
        </>
      )}
    </>
  );
};
