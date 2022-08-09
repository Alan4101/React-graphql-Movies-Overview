import { FC, MouseEventHandler, ReactNode } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

type Variant = "text" | "contained" | "outlined" | undefined;

interface MovieButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: Variant;

  onClick?: MouseEventHandler | undefined;
}

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  marginTop: "15px",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // "&:hover > .MuiTypography-root": {
  //   color: theme.palette.primary.contrastText,
  // },
}));
export const MovieButton: FC<MovieButtonProps> = (props) => {
  const { children, className, variant, onClick } = props;
  return (
    <StyledButton className={className} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
