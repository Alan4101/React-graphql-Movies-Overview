import { useQuery } from "@apollo/client";
import { Grid, Container, Typography } from "@mui/material";
import { FC } from "react";
import { GET_RECOMMENDED } from "../../services/graphql/reccomended.query";

export const Recomended: FC = () => {
  const { loading, data, error } = useQuery(GET_RECOMMENDED);
  console.log(data);
  return (
    <Container>
      <Grid container>
        {error ? (
          <Typography>Problem</Typography>
        ) : loading ? (
          <>Loading...</>
        ) : (
          data && data.getRecommended.map((item: any) => <p>{item.title}</p>)
        )}
      </Grid>
    </Container>
  );
};
