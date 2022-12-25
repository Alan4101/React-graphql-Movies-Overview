import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
type OwnProps = {
  count: number
}
export const ContentWrapper = styled(Box)<OwnProps>(({ theme, count }) => ({
  width: '100%',
  display: 'flex',
  color: theme.palette.common.white,
  transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
  '&>*': {
    width: `calc(100% / ${count})`,
    flexShrink: 0,
    flexGrow: 1,
    [theme.breakpoints.down(1023)]:{
      width: 'calc(100% / 3)'
    },
    [theme.breakpoints.down(769)]:{
      width: 'calc(100% / 2)'
    },
  }
}))
export const styles = {
  container: {
    margin: '0 auto',
    // maxWidth: '1200px',
    maxWidth: '100%',
    overflowX: 'hidden'
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none'
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%'
  },
  controlButton: {
    width: 'min-content',
    height: 'max-content',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 9,
    color: 'red',
    padding: 0
  },
  leftButton: {
    left: 0
  },
  rightButton: {
    right: '-6px'
  }
}
