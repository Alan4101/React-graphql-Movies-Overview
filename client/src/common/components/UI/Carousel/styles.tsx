export const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
    overflowX: 'hidden'
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    gap: '10px',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none'
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    gap: '10px',
    transition: 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
    '&>*': {
      width: 'calc(100% / 3)',
      flexShrink: 0,
      flexGrow: 1
    }
  },

  buttonWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  controlButton: {
    width: 'min-content',
    height: 'max-content',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 9
  },
  leftButton: {
    left: 0
  },
  rightButton: {
    right: 0
  }
}
