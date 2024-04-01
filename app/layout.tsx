import { Container } from '@mui/material'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navigation } from '@/components'
import { CartProvider, ContextProvider } from '@/components/context'
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
      <ContextProvider>
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
      </ContextProvider>
    </html>
  )
}
export default RootLayout
