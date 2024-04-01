import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { PropsWithChildren } from 'react'

import { theme } from '@/style/theme'

import { CartProvider } from './cart-context'

export const ContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
