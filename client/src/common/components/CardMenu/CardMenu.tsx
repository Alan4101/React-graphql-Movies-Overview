import { FC, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CardMenuProps {
  handleClickMenu: () => void;
  menuItems: any[];
}

export const CardMenu: FC<CardMenuProps> = ({ handleClickMenu, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelectMenu = () => {
    handleClose();
    handleClickMenu();
  };
  return (
    <>
      <IconButton sx={{ position: "absolute", right: 0 }} onClick={handleClick}>
        <MoreVertIcon sx={{ color: "#ccc" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index + item} onClick={handleSelectMenu}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
