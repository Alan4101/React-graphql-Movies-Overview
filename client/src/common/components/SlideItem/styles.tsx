export const styles = {
  carouselItem: {
    position: 'relative',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  /**
   *
   * TODO: should make better way
   *
   */

  wrapper: {
    '&:hover': {
      transition: '.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      transform: 'scale(1.2)'
    }
  },
  img: { objectFit: 'contain', width: '100%', borderRadius: '10px' },
  buttonWrapper: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    borderRadius: '50%',
    color: '#fff',
    '&>button': {
      color: '#fff'
    },
    '&:hover': {
      transition: '.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
      // bgcolor: 'transparent',
      bgcolor: 'red',

      color: '#fff'
    },
    '&:hover button': {
      color: '#fff',
      transform: 'scale(0.9)',
      transition: '0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }
  }
}
