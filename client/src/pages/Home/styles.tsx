import { Box} from '@mui/material'
import { styled } from '@mui/material/styles'

const MLoaderContainer = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const cardWrapperSX = {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  position: 'relative',
  gridGap: '2rem'
}
export { MLoaderContainer, cardWrapperSX}