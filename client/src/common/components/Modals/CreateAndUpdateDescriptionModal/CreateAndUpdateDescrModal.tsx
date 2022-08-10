import { FC } from "react";
// mui
import { Grid, Typography } from "@mui/material";

//components
import { MovieModal } from "../MainModal/MovieModal";
import { MovieButton, MovieTextField } from "../../UI";
import { StyledForm } from "../common";

//library
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

interface CreateUpdateProps {
  value: any;
  isUpdate: boolean;
  isOpenModal: boolean;
  toggleModal: () => void;
  updateDescription: (value: string) => void;
}

export const CreateAndDeleteDescrModal: FC<CreateUpdateProps> = ({
  value,
  isUpdate,
  isOpenModal,
  toggleModal,
  updateDescription,
}) => {
  const { t } = useTranslation();
  const movieFormik = useFormik({
    initialValues: {
      description: value,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateDescription(values.description);
    },
  });
  const { values, handleSubmit, handleReset, setFieldValue } = movieFormik;

  const resetForm = (e: any) => {
    handleReset(e);

    toggleModal();
  };

  return (
    <MovieModal isOpen={isOpenModal} toggleModal={toggleModal}>
      <Grid container>
        <Grid item xs={12} justifyContent="center">
          <Typography
            sx={{ padding: "15px 0", textAlign: "center" }}
            variant="h4"
          >
            {t("content.button.addreview")}
          </Typography>
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
            <Grid
              container
              flexDirection="row"
              gap={2}
              justifyContent="flex-end"
            >
              <MovieButton variant="outlined" onClick={resetForm}>
                {t("content.button.cancel")}
              </MovieButton>
              <MovieButton
                variant="contained"
                onClick={(e: any) => handleSubmit(e)}
              >
                {isUpdate
                  ? t("content.button.update")
                  : t("content.button.save")}
              </MovieButton>
            </Grid>
          </StyledForm>
        </Grid>
      </Grid>
    </MovieModal>
  );
};
