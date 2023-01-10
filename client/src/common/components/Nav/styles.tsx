import { Theme } from '@mui/material'
const styles = {
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: '68px'
  },
  select: {
    border: 'none',
    outline: 'none !important',
    color: '#fff',

    fontSize: '14px'
  },
  paper: {
    width: '100px',
    color: '#fff'
  },
  sideBar: (theme: Theme) => ({
    bgcolor: theme.palette.primary.main,
  })
}
export default styles
