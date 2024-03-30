'use client'

import { CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { GridItem, UButton } from '@/components'
import type { Product } from '@/services/api/products'

export const ProductCard = ({
  onAddToCart,
  product,
}: {
  onAddToCart: () => void
  product: Product
}) => {
  return (
    <GridItem lg={3} md={4} p={1} sm={6} xs={12}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardActionArea>
          <CardMedia
            alt="green iguana"
            component="img"
            height="200"
            image={product.thumbnail}
          />
          <CardContent sx={{ flex: '1' }}>
            <Typography variant="h6">{product.title}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 'auto',
            padding: '16px',
          }}
        >
          <Typography variant="h6">{product.priceLabel}</Typography>
          <UButton onClick={onAddToCart}>Add to cart</UButton>
        </CardActions>
      </Card>
    </GridItem>
  )
}
