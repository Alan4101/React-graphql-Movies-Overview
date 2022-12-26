import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from '../theme'

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: any) => (
    <ThemeProvider theme={mainTheme}>
      <Story />
    </ThemeProvider>
  )
]
