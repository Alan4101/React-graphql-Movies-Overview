import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { backgroungEmptyFilmList } from '../../assets'

const MSelectedMoviePaper = styled(Paper)(({ theme }) => ({
  height: 'calc(100vh - 200px)',
  position: 'sticky',
  overflowY: 'auto',
  boxShadow: 'none !important',
  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-track': {
    marginTop: '75px',
    marginBottom: '75px',
    marginLeft: '4px',
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.light
  }
}))
const EmptyMovieList = styled(Box)(() => ({
  width: '100%',
  height: '200px',
  background: `url(${backgroungEmptyFilmList}) no-repeat center`,
  backgroundSize: 'contain',
  opacity: '.5'
}))
const ButtonBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px'
})
export { MSelectedMoviePaper, EmptyMovieList, ButtonBox }
