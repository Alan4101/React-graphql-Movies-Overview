import { useState, useCallback } from "react";
import { IMovie } from "../../common/models";

export const useMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);
  const selectMovie = useCallback(
    (movie: any) => {
      const newMovie = new Set<IMovie>([...selectedMovies, movie]);
      setSelectedMovies(Array.from(newMovie));
    },
    [selectedMovies]
  );
  const deleteMovie = useCallback(
    (id: string) => {
      const filteredMovies = selectedMovies.filter((item) => item.id !== id);

      setSelectedMovies([...filteredMovies]);
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};
