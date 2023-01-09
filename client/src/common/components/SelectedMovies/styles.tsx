import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const CardWrapper = styled(Box)<{ count: number }>(({ count }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${count}, 220px)`
}))
const styles = {
  wrapper: {
    margin: '0 auto',
    maxWidth: '800px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  carouselWrapper: {
    padding: 1,
    justifyContent: 'center'
  },
  controlButtonBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 150px)',
    gap: '10px',
    paddingBottom: '20px',
    justifyContent: 'center'
  },
  button: { backgroundColor: '#fff', margin: 0 },
  cardWrapper: {},
  loadWrapper: {
    margin: '0 auto',
    height: '300px',
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&>*': {
      margin: '0 7px',
      width: '33.3333%'
    }
  }
}
export { CardWrapper, styles }
