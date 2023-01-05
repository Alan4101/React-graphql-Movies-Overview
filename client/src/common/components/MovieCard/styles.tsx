import { Box, Grid, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { default as em } from '@emotion/styled/macro'

const MCard = em(Grid)({
  height: '300px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  transition: '0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: 'inherit',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.25)'
  },
  '&:hover': {
    transform: 'scale(1.035, 1.035)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)'
  },
  '&:hover::before': {
    background: 'rgba(0, 0, 0, 0.8)',
    transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
  },
  '&:hover .cardImg': {
    transform: 'translateY(-10px)'
  }
})

const MText = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  padding: '5px'
}))

const MTittle = em(MText)({
  position: 'absolute',
  bottom: '-180%',
  fontWeight: 600,
  fontSize: '18px',
  height: 'min-content'
})

const MDescription = em(MText)({
  position: 'absolute',
  top: '-150%',
  fontWeight: 400,
  fontSize: '14px',
  letterSpacing: '0.5px'
})

const MCardWrapper = em(Box)({
  position: 'relative',
  width: '100%',
  height: 'inherit',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  '&:hover': {
    [`${MTittle}`]: {
      bottom: 0,
      transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
    },
    [`${MDescription}`]: {
      top: '5%',
      transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }
  }
})

const imgSx = {
  position: 'absolute',
  top: 0,
  height: '110%',
  width: '100%',
  zIndex: -1,
  transition: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  objectFit: 'contain'
}

const MIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '40px',
  height: '40px',
  color: theme.palette.primary.contrastText,
  margin: '5px',
  zIndex: 9,
  '&:hover': {
    transition: '0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
  }
}))

const MAddButton = styled(MIconButton)(({ theme }) => ({
  '&:hover': {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  }
}))

const MSelectedButton = styled(MIconButton)(({ theme }) => ({
  background: theme.palette.success.light,
  '&:hover': {
    background: theme.palette.success.dark,
    color: theme.palette.primary.contrastText
  }
}))

export { MCard, MCardWrapper, MTittle, MDescription, MAddButton, MSelectedButton, imgSx }
