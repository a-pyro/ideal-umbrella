import type { SxProps } from '@mui/material'
import { Box } from '@mui/material'
import Link from 'next/link'

export const Navigation = ({ sx }: { sx?: SxProps }) => {
  return (
    <nav>
      <Box display="flex" gap={2} sx={sx}>
        <Link href="/">Home</Link>
        <Link href="/products">Prodotti</Link>
      </Box>
    </nav>
  )
}
