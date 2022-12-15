import { Container, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const RecommendedList: FC = () => {
  const { id } = useParams<{ id: string }>()
  console.log(id)
  return (
    <Container>
      <Grid>
        <Typography>Recommended list</Typography>
      </Grid>
    </Container>
  )
}
