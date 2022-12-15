import { FC } from 'react'
import { SxProps, TextField, Theme } from '@mui/material'

import classes from './TextField.module.css'
interface TextFieldProps {
  value: string | number
  label?: string
  type?: string
  multiline?: boolean
  rows?: number
  className?: string
  disabled?: boolean
  placeholder: string
  name?: string
  errorText?: string
  sx?: SxProps<Theme>
  onChange: (value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export const MovieTextField: FC<TextFieldProps> = ({
  sx,
  value,
  label,
  type,
  multiline,
  rows,
  name,
  errorText,
  disabled,
  className,
  onChange
}) => {
  return (
    <TextField
      classes={{ root: classes.root }}
      sx={sx}
      value={value}
      label={label}
      disabled={disabled}
      name={name}
      error={Boolean(errorText)}
      type={type}
      variant='outlined'
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      className={className}
    />
  )
}
