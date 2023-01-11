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
    gridArea: 'cancel'
  },
  buttonSubmit: {
    gridArea: 'submit'
  }
}
export default styles
