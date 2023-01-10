import { FC } from 'react'
import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material'

interface OwnProps {
  value: number
}
type CircularProgresWithLableProps = OwnProps & Omit<CircularProgressProps, 'variant' | 'value'>

export const CircularProgresWithLable: FC<CircularProgresWithLableProps> = props => {
  return (
    <Box sx={styles.container}>
      <CircularProgress variant='determinate' {...props} sx={styles.circle} value={props.value * 10} />
      <Box sx={styles.textWrapper}>
        <Typography variant='caption' component='div'>
          {props.value}
        </Typography>
      </Box>
    </Box>
  )
}
const styles = {
  container: {
    position: 'relative',
    display: 'inline-flex'
  },
  circle: {
    color: '#fff'
  },
  textWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
}
