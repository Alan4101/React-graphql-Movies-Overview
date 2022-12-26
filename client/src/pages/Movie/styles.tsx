import { Theme } from '@mui/material'
export const styles = {
  mainContainer: (theme: Theme)=>({ 
    height: 'calc(100vh - 68px)',
    position: 'relative',
    [theme.breakpoints.down(600)]: {
      height: '100%'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'inherit',
      backgroundColor: 'rgba(0,0,0,.4)'
    }
  }),
  wrapper: (theme: Theme) => ({
    marginTop: '5%',
    [theme.breakpoints.down(425)]: {
      margin: 0,
      padding: 0
    }
  }),
  backgroundPicture: {
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    height: 'inherit',
    width: '100%'
  },
  content:(theme: Theme)=>({ 
    display: 'grid',

    gridTemplate: '1fr auto / minmax(min-content, 200px) minmax(min-content, auto)',
    position: 'relative',
    gap: '15px',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0, .6)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
    padding: '15px',
    [theme.breakpoints.down(600)]:{
      gridTemplate: '1fr minmax(min-content, 1fr) / 1fr',
      height: '100%'
    }
  }),
  pictureWrapper: {
    position: 'relative',
    width: '200px',
    height: '270px'
  },
  poster: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    transition: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    objectFit: 'cover'
  },
  detailsContainer:{
    height: 'fit-content'
  },
  text: {
    color: '#fff'
  },
  title: (theme: Theme) => ({
    fontWeight: '500',
    color: '#fff',
    fontSize: '2em',
    [theme.breakpoints.down(426)]: {
      fontSize: '1.5rem'
    }
  }),
  contrastText: {
    color: '#ccc'
  },
  overviewText: (theme: Theme) => ({
    margin: '2em 0',
    width: '100%',
    [theme.breakpoints.down(425)]: {
      margin: '0.5em 0'
    }
  }),
  buttonBackContainer: {
    display: 'grid',
    alignSelf: 'end'
  },
  buttonBack:(theme: Theme)=>({
    color: theme.palette.secondary.light,
    border:`1px solid ${theme.palette.secondary.main}` 
  }),
  loaderContainer: {
    width: '100%',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  castContainer: {
    display: 'grid',
    height: 'fit-content',
    alignSelf: 'end'
  }
}
