import { FC } from 'react'
import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material'

interface OwnProps {
  /**
   * @param
   * value is used to label and progress value
   */
  value: number
  /**
   * @param progressColor - color progress line
   * @default #fff
   */
  progressColor?: string
  /**
   * @param textColor - lable text color
   * @default #fff
   */
  textColor?: string
}
type CircularProgresWithLableProps = OwnProps & Omit<CircularProgressProps, 'variant' | 'value'>

export const CircularProgresWithLable: FC<CircularProgresWithLableProps> = props => {
  const { value, progressColor = '#fff', textColor = '#fff', ...circlProps } = props
  return (
    <Box sx={styles.container}>
      <CircularProgress variant='determinate' {...circlProps} sx={{ color: progressColor }} value={value * 10} />
      <Box sx={styles.textWrapper}>
        <Typography variant='caption' component='div' sx={{ color: textColor }}>
          {value}
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
  textWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
