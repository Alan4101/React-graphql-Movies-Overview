import { useState, useCallback, useEffect } from "react";
import { toast, ToastOptions } from "react-toastify";
import { IMovie } from "../../common/models";
import { GET_SELECTED_MOVIES } from "../../pages/Home/queries";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_MOVIE_TO_SELECTED, REMOVE_MOVIE } from "../../pages/Home/mutation";
import { ISelectedMovie } from "./../../common/models";
import { toastOptions } from "../../pages/Home/Home.helper";

const MAX_SELECTED = 5;
export const useMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState<ISelectedMovie[]>([]);
  const { data } = useQuery(GET_SELECTED_MOVIES);
  const [deleteMovie] = useMutation(REMOVE_MOVIE);
  const [createMovie] = useMutation(ADD_MOVIE_TO_SELECTED);

  useEffect(() => {
    data && setSelectedMovies(data.getSelectedMovies);
  }, [data]);
  // const selectMovie = useCallback(
  //   (movie: any) => {
  //     const length = selectedMovies.length;

  //     const newMovie = new Set<IMovie>([...selectedMovies, movie]);
  //     if (length <= MAX_SELECTED) {
  //       setSelectedMovies(Array.from(newMovie));
  //     } else {
  //       toast.warn("🦄 Take it easy! Only 5 films", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     }
  //   },
  //   [selectedMovies]
  // );
  const handleSelecMovie = (movie: any) => {
    const { title, poster, releaseDate, adult, id } = movie;
    const length = selectedMovies.length;
    const isNew = selectedMovies.some((item) => item.movieId === id);
    if (!isNew && length < MAX_SELECTED) {
      createMovie({
        variables: {
          title,
          poster,
          releaseDate,
          adult,
          genres: "drama",
          movieId: id,
        },
      }).then(() => {
        setSelectedMovies([...selectedMovies, movie]);
        toast.success("Movie added!", toastOptions as ToastOptions);
      });
    } else {
      toast.warn(
        isNew ? "Movie is exist!" : "🦄 Take it easy! Only 5 films",
        toastOptions as ToastOptions
      );
    }
  };
  const handleDeleteMove = useCallback(
    (movie: any) => {
      const filteredMovies = selectedMovies.filter(
        (item) => item._id !== movie._id
      );
      setSelectedMovies([...filteredMovies]);
      deleteMovie({ variables: { id: movie._id } });
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    handleDeleteMove,
    handleSelecMovie,
  };
};
