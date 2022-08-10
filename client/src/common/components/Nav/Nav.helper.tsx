import SettingsIcon from "@mui/icons-material/Settings";

interface IMenuItem {
  icon: JSX.Element;
  title: string;
  route: string;
}
export const menuItem: IMenuItem[] = [
  {
    icon: <SettingsIcon />,
    title: "page.home",
    route: "/",
  },
  {
    icon: <SettingsIcon />,
    title: "page.settings",
    route: "settings",
  },
  {
    icon: <SettingsIcon />,
    title: "page.recommended",
    route: "recomended",
  },
];
