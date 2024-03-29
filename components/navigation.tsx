import { Box } from '@mui/material'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav>
      <Box display="flex" gap={2}>
        <Link href="/">Home</Link>
        <Link href="/products">Prodotti</Link>
      </Box>
    </nav>
  )
}
