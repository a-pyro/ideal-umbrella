'use client'
import type { SxProps } from '@mui/material'
import { Box, Link } from '@mui/material'
import { usePathname } from 'next/navigation'

import { CartDrawer } from './cart-drawer'

export const Navigation = ({ sx }: { sx?: SxProps }) => {
  const pathname = usePathname()
  const isAcive = (page: string) => pathname.includes(page)
  const underline = (page: string) => (isAcive(page) ? 'always' : 'hover')
  return (
    <nav>
      <Box alignItems="center" display="flex" gap={2} sx={sx}>
        <Link href="/" underline={underline('home')}>
          Home
        </Link>
        <Link
          href="/products"
          marginRight="auto"
          underline={underline('products')}
        >
          Prodotti
        </Link>
        <CartDrawer />
      </Box>
    </nav>
  )
}
