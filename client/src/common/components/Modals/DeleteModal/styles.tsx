const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateAreas: '"title title" "submit cancel"',
    justifyContent: 'center'
  },
  text: {
    padding: '15px',
    gridArea: 'title',
    textAlign: 'center'
  },
  buttonCancel: {
    gridArea: 'submit'
  },
  buttonSubmit: {
    gridArea: 'cancel'
  }
}
export default styles
