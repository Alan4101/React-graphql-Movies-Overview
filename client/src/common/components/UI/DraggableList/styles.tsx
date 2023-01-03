export const styles = {
  container: {
    position: 'relative',
    width: '200px',
    height: '100px',
    '&>div': {
      position: 'absolute',
      width: '200px',
      height: '40px',
      transformOrigin: '50% 50% 0px',
      borderRadius: '5px',
      color: 'white',
      lineHeight: '40px',
      paddingLeft: '32px',
      fontSize: '14.5px',
      background: 'lightblue',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      touchAction: 'none'
    }
  }
}
