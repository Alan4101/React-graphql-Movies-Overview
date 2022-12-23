import { Theme } from '@mui/material'
export const styles = {
  mainContainer: {
    height: 'calc(100vh - 68px)',
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'inherit',
      backgroundColor: 'rgba(0,0,0,.4)'
    }
  },
  // mainContainerMobile: (theme: Theme) => ({
  //   // [theme.breakpoints.down(425)]: {
  //   //   height: 'auto'
  //   // }
  // }),
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
  content: (theme: Theme) => ({
    display: 'grid',

    gridTemplate: '1fr / 1fr 2fr',

    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0, .6)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
    padding: '15px',
    [theme.breakpoints.down(780)]: {
      gridTemplate: '1fr 2fr/ 1fr',
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
  text: {
    color: '#fff'
  },
  title: (theme: Theme) => ({
    fontWeight: '500',
    color: '#fff',
    fontSize: '3.75em',
    [theme.breakpoints.down(426)]: {
      fontSize: '2rem'
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
  loaderContainer: {
    width: '100%',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
