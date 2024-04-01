import { Container, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navigation } from '@/components'
import { CartProvider } from '@/components/context'
import { theme } from '@/style/theme'
import '../style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  description:
    'Ideal Umbrella Corp. is a leading provider of umbrella services.',
  title: 'Ideal Umbrella Corp.',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body className={inter.className}>
            <Container
              maxWidth="lg"
              sx={{
                height: '100dvh',
                paddingTop: 4,
              }}
            >
              <CartProvider>
                <Navigation sx={{ mb: 3 }} />
                {children}
              </CartProvider>
            </Container>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
export default RootLayout
