import { Box, CircularProgress } from '@mui/material'

export const Loader = () => {
  return (
    <Box sx={styles.loader}>
      <Box sx={styles.wrapper}>
        <CircularProgress />
      </Box>
    </Box>
  )
}
const styles = {
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'inherit'
  }
}
