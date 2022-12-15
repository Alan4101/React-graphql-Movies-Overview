import { createTheme } from '@mui/material'
import { PaletteOptions, Components, ThemeOptions } from '@mui/material/styles'

const palette: PaletteOptions = {
  primary: {
    main: '#381f75',
    dark: '#512da8',
    light: '#7357b9',
    contrastText: '#fff'
  },
  secondary: {
    main: '#ab003c',
    dark: '#f50057',
    light: '#f73378',
    contrastText: '#fff'
  },
  background: {
    default: '#ede7f6',
    paper: '#fff'
  },
  common: {
    // dark: "#1A1538",
    // gray: "#8B89A0",
  },
  text: {
    primary: '#464c71',
    secondary: '#8F94B6'
  }
}
const typography = {
  fontFamily: 'system-ui, Poppins, sans-serif',
  h6: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '32px',
    color: palette?.text?.primary
  },
  h3: {
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '52px',
    color: palette?.text?.primary
  },
  body2: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '26px',
    color: palette?.text?.primary
  },
  body1: {
    fontSize: '16px',
    fontWeight: 400,
    color: palette?.text?.primary
  },

  subtitle1: {
    fontSize: '16px',
    fontWeight: 400,
    color: palette?.text?.primary
  }
}
const components: Components = {}

export const mainTheme = createTheme({
  palette,
  typography,
  components
} as ThemeOptions)
