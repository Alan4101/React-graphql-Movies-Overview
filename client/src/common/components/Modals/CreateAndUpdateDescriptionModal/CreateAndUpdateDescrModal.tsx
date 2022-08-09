import { FC } from "react";
// mui
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//components
import { MovieModal } from "../MainModal/MovieModal";
import { MovieTextField } from "../../UI";

//library
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";

// mutation
import { ADD_USER_DESCRIPTION } from "../../../../pages/Home/mutation";

interface CreateUpdateProps {
  id: string;
  value: any;
  isUpdate: boolean;
  isOpenModal: boolean;
  toggleModal: () => void;
  refetch: () => void;
}

const StyledForm = styled("form")(() => ({
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
}));

export const CreateAndDeleteDescrModal: FC<CreateUpdateProps> = ({
  id,
  value,
  isUpdate,
  isOpenModal,
  toggleModal,
  refetch,
}) => {
  const [addUserDescription] = useMutation(ADD_USER_DESCRIPTION);

  const { t } = useTranslation();
  const movieFormik = useFormik({
    initialValues: {
      description: value,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateDescription(values.description, id);
    },
  });
  const { values, handleSubmit, handleReset, setFieldValue } = movieFormik;

  const resetForm = (e: any) => {
    handleReset(e);

    toggleModal();
  };

  const updateDescription = (value: string, id: string) => {
    addUserDescription({ variables: { id, userDescription: value } })
      .then(() => {
        toggleModal();
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <MovieModal isOpen={isOpenModal} toggleModal={toggleModal}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">{t("content.button.addreview")}</Typography>
        </Grid>
        <Grid container item md={12} xs={12}>
          <StyledForm>
            <MovieTextField
              value={values.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
              placeholder="Enter your review, please."
              multiline={true}
              name="description"
              sx={{ width: "100%" }}
              rows={8}
            />
            <Grid container flexDirection="row">
              <Button onClick={resetForm}>{t("content.button.cancel")}</Button>
              <Button onClick={(e: any) => handleSubmit(e)}>
                {isUpdate
                  ? t("content.button.update")
                  : t("content.button.save")}
              </Button>
            </Grid>
          </StyledForm>
        </Grid>
      </Grid>
    </MovieModal>
  );
};
