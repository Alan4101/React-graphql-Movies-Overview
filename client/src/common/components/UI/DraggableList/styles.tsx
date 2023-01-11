import { Theme } from '@mui/material'
export const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100px',
    '&>div': (theme: Theme) => ({
      position: 'absolute',
      width: '100%',
      height: '40px',
      transformOrigin: '50% 50% 0px',
      borderRadius: '5px',
      color: '#fff',
      lineHeight: '40px',
      paddingLeft: '32px',
      // fontSize: '14.5px',
      background: `${theme.palette.primary.light}`,
      // textTransform: 'uppercase',
      // letterSpacing: '2px',
      touchAction: 'none',
      // cursor: 'pointer',
      webkitUserSelect: 'none',
      webkitTouchCallout: 'none',
      mozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      cursor: 'grab'
    }),
    '&>div:active': (theme: Theme)=>({
      cursor: 'grabbing',
      background: theme.palette.secondary.main,
      // background: 'rgba(116,87,185, 0.85)',
      // border: '2px solid'
    })
  },
  text: {
    color: '#fff'
  }
}
