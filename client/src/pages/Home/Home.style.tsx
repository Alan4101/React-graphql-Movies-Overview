import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { backgroungEmptyFilmList } from "../../common/assets";

export const SelectedMoviePaper = styled(Paper)(({ theme }) => ({
  height: "calc(100vh - 200px)",
  position: "sticky",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-track": {
    marginTop: "75px",
    marginBottom: "75px",
    marginLeft: "4px",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.primary.main,
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.primary.light,
  },
}));
export const EmptyMovieList = styled(Box)(() => ({
  width: "100%",
  height: "200px",
  background: `url(${backgroungEmptyFilmList}) no-repeat center`,
  backgroundSize: "contain",
  opacity: ".5",
}));
export const LoaderContainer = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
