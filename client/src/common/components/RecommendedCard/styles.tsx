import { IconButton, IconButtonProps, Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
type OwnpPops = { expand: boolean } & IconButtonProps

export const ExpandMore = styled((props: OwnpPops) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))
export const styles = {
  cardHeader: {
    display: 'grid',
    gridTemplate: 'repeat(2, auto)/1fr auto',
    gridTemplateAreas: '"title button" "description description"'
  },
  title: {
    letterSpacing: '2px',
    color: '#000',
    fontSize: '16px',
    textTransform: 'uppercase',
    gridArea: 'title',
    fontWeight: '600'
  },
  description: {
    paddingTop: '15px',
    gridArea: 'description'
  },
  deleteButton: (theme: Theme) => ({
    padding: 0,
    gridArea: 'button',
    transition: '.5s',
    '&:hover': {
      backgroundColor: '#fff',
      color: `${theme.palette.primary.main}`,
      transform: 'scale(0.9)'
    }
  })
}
// export * from './gql'
// export * from './fragment-masking'
// export * from './graphql'
