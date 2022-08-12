import { FC } from "react";
// mui
import { Button, Grid, Typography } from "@mui/material";

//components
import { MovieModal } from "../MainModal/MovieModal";
import { StyledForm } from "../common";

//library
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";

// mutation
import { CREATE_RECOMENDED_MOVIES } from "../../../../services/graphql";
// other
import { ISelectedMovie } from "../../../../services/models/models";
import { MovieTextField } from "../../UI";

interface CreateRecomendedProps {
  moviesList: ISelectedMovie[];
  isOpenModal: boolean;
  toggleModal: () => void;
}

export const CreateRecomendedList: FC<CreateRecomendedProps> = ({
  isOpenModal,
  moviesList,
  toggleModal,
}) => {
  const { t } = useTranslation();
  const [createRecomendedMovies] = useMutation(CREATE_RECOMENDED_MOVIES);

  const movieFormik = useFormik({
    initialValues: {
      title: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      createRecomendedList(values.title);
    },
  });
  const { values, handleSubmit, handleReset, setFieldValue } = movieFormik;

  const resetForm = (e: any) => {
    handleReset(e);
    toggleModal();
  };

  const createRecomendedList = (value: string) => {
    const newList = {
      title: value,
      createdData: new Date().toLocaleDateString(),
      movies: [...moviesList],
    };

    createRecomendedMovies({
      variables: {
        ...newList,
      },
    }).then(() => toggleModal());
  };

  return (
    <MovieModal isOpen={isOpenModal} toggleModal={toggleModal}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">
            {t("selectedMovies.recomendedModal.title")}
          </Typography>
        </Grid>
        <Grid container item md={12} xs={12}>
          <StyledForm>
            <MovieTextField
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
              placeholder="Enter your title, please."
              name="title"
              sx={{ width: "100%" }}
            />
            <Grid container flexDirection="row">
              <Button onClick={resetForm}>{t("content.button.cancel")}</Button>
              <Button onClick={(e: any) => handleSubmit(e)}>
                {t("content.button.save")}
              </Button>
            </Grid>
          </StyledForm>
        </Grid>
      </Grid>
    </MovieModal>
  );
};
