'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#333',
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  }),
)
