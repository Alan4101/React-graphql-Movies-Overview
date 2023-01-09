import { Theme } from '@mui/material'
const styles = {
  title: {
    color: '#fff',
    textDecoration: 'underline'
  },
  text: {
    color: '#ccc'
  },
  buttonWrapper: (theme: Theme) => ({
    [theme.breakpoints.down(426)]: {
      width: '100%',
      display: 'center',
      justifyContent: 'center'
    }
  }),
  button: {
    color: '#fff'
  },
  btnText: (theme: Theme) => ({
    display: 'none',
    color: '#fff',
    [theme.breakpoints.down(426)]: {
      display: 'block'
    }
  })
}
export default styles
