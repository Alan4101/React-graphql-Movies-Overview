import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Loading = styled(Box)({
  height: '300px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
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
  carouselItem: {
    position: 'relative',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  img: { objectFit: 'contain', width: '100%', borderRadius: '10px' },
  buttonWrapper: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    bgcolor: 'red',
    borderRadius: '50%'
  },
  controlButtonBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 150px)',
    gap: '10px',
    paddingBottom: '20px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: { backgroundColor: '#fff', margin: 0 },
  cardWrapper: {
    justifyContent:'center',
    flexWrap: 'nowrap'
  }
}
export { Loading, styles }
