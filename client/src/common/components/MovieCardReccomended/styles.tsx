import { IconButton, IconButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
type OwnpPops = { expand: boolean } & IconButtonProps

export const ExpandMore = styled((props: OwnpPops) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))
