import { FC } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Container, Typography } from "@mui/material";
import { GET_RECOMMENDED } from "../../services/graphql/reccomended.query";
import { MovieCardRecommended } from "../../common/components";

export const Recomended: FC = () => {
  const { loading, data, error } = useQuery(GET_RECOMMENDED);

  console.log(data);
  return (
    <Container>
      <Grid container gap={2} mt={2}>
        {error ? (
          <Typography>Problem</Typography>
        ) : loading ? (
          <>Loading...</>
        ) : (
          data &&
          data.getRecommended.map((m: any, i: number) => (
            <MovieCardRecommended movie={m} key={i} />
          ))
        )}
      </Grid>
    </Container>
  );
};
