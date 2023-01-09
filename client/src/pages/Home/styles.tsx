const styles = {
  cardWrapper: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    position: 'relative',
    gridGap: '2rem'
  },
  container:{
    mt: '15px',
    display: 'grid',
    width: '100%',
    gridTemplateRows: 'repeat(3, auto)',
    justifyContent: 'center'
  }
}

export default styles
