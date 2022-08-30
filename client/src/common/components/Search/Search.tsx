import { FC } from "react";
import { Grid } from "@mui/material";
import { MovieCard } from "../MovideCard/MovieCard";
import { IMovie } from "../../../services/models/models";

interface SearchProps {
  data: any,
  handleSelecMovie: (movie: IMovie)=> void;
}
export const Search:FC<SearchProps> = ({ data, handleSelecMovie}) => {
  console.log(data)
  if(!data){
    return <></>
  }
  return (
    <>
      {
        data.searchMovie.results.map((item: IMovie) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={item} onCardSelect={handleSelecMovie} />
          </Grid>
        ))
      }
    </>
  )
}