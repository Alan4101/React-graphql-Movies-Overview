import { FC } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

type OwnProps = Omit<TextFieldProps, 'variant'| 'fullWidth'>

export const MovieTextField: FC<OwnProps> = props => {
  return <TextField {...props} variant='standard' fullWidth />
}
