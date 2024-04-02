'use client'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { SnackbarProvider } from 'notistack'
import type { PropsWithChildren } from 'react'

import { theme } from '@/style/theme'

import { CartProvider } from './cart-context'

export const ContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
          autoHideDuration={2000}
          maxSnack={3}
        >
          <CartProvider>{children}</CartProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
