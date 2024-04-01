import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'
import Link from 'next/link'

import { CartDrawer } from './cart-drawer'

export const Navigation = ({ sx }: { sx?: SxProps }) => {
  return (
    <nav>
      <Box alignItems="center" display="flex" gap={2} sx={sx}>
        <Link href="/">Home</Link>
        <Link href="/products" style={{ marginRight: 'auto' }}>
          Prodotti
        </Link>
        <CartDrawer />
      </Box>
    </nav>
  )
}
