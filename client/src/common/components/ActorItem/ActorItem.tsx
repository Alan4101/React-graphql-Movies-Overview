import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Cast } from '../../../graphql'
import { styles } from './style'

interface OwnProps {
  actor: Cast
}
const defaultPicture =
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBu9nYd722gKRVUMrE8FHpc6eALfJNEP9cna7_4XCyg&s'
export const ActorItem: FC<OwnProps> = ({ actor }) => {
  return (
    <Box key={actor.creditId} sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box
          sx={styles.img}
          component='img'
          src={actor.profilePath ? actor.profilePath : defaultPicture}
          alt={actor.name}
        />
        <Typography sx={styles.content}>{actor.name}</Typography>
      </Box>
    </Box>
  )
}
