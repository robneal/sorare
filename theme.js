import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '980px',
  xl: '1200px',
  '2xl': '1440px',
}

const theme = extendTheme({ breakpoints })