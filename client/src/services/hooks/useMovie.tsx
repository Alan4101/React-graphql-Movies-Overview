import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { IMovie } from "../../common/models";

const MAX_SELECTED = 5;
export const useMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);
  const selectMovie = useCallback(
    (movie: any) => {
      const length = selectedMovies.length;

      const newMovie = new Set<IMovie>([...selectedMovies, movie]);
      if (length <= MAX_SELECTED) {
        setSelectedMovies(Array.from(newMovie));
      } else {
        toast.warn("🦄 Take it easy! Only 5 films", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
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
