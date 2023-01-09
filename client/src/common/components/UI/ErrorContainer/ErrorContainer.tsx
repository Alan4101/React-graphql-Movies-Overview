import { Box } from '@mui/material'
import { FC } from 'react'
interface OwnProps {
  error: string
}
export const ErrorContainer: FC<OwnProps> = ({ error }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
        fontWeight: 500,
        overflow: 'hidden'
      }}
    >
      {error}
    </Box>
  )
}
