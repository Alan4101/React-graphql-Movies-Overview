import { Theme } from '@mui/material'

const styles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    minWidth: '290px',
    boxShadow: '24px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '0',
    outline: 'none'
  },
  modalBody: {
    position: 'relative',
    padding: '1em 1.2em'
  },
  content: {
    color: 'rgb(29, 26, 26)'
  },
  closeButton: (theme: Theme) => ({
    position: 'absolute',
    top: '-15px',
    right: '-15px',
    borderRadius: '50%',
    backgroundColor: ' #ccc',
    color: '#fff',
    border: '1px solid transparent',
    transition: '.5s',
    '&:hover': {
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.primary.main}`,
      color: `${theme.palette.primary.main}`,
      transform: 'scale(0.9)'
    }
  }),
  backDrop: {
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(67, 92, 233, 0.4)'
  }
}
export default styles
