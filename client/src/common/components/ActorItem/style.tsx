export const styles = {
  container: {},
  wrapper: {
    height: '260px',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 7px',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, .5)'
    }
  },
  img: {
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    transition: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
  },
  content: {
    position: 'absolute',
    bottom: '15px',
    left: 0,
    width: '100%',
    height: 'min-content',
    color: '#fff',
    zIndex: '9',
    textAlign: 'center',
    fontWeight: 500
  }
}
