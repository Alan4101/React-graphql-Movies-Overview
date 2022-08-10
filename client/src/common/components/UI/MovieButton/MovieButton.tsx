import { FC, MouseEventHandler, ReactNode } from "react";
import { Button, SxProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

type Variant = "text" | "contained" | "outlined" | undefined;
type Color =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";
interface MovieButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: Variant;
  color?: Color;
  sx?: SxProps<Theme>;
  onClick?: MouseEventHandler | undefined;
}

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  marginTop: "15px",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));
export const MovieButton: FC<MovieButtonProps> = (props) => {
  const { children, className, variant, color, sx, onClick } = props;
  return (
    <StyledButton
      sx={sx}
      color={color}
      className={className}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
