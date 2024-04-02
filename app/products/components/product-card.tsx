'use client'

import { CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import type { Product } from '@/app/api/products/fetch'
import { GridItem } from '@/components'
import { useAppRouter } from '@/router'

import { AddToCartButton } from './add-to-cart-btn'

export const ProductCard = ({
  onAddToCart,
  product,
}: {
  onAddToCart: () => void
  product: Product
}) => {
  const router = useAppRouter('products')
  return (
    <GridItem lg={3} md={4} p={1} sm={6} xs={12}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
          <CardMedia
            alt="green iguana"
            component="img"
            draggable={false}
            height="200px"
            image={product.thumbnail}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent sx={{ flex: '1' }}>
            <Typography variant="h5">{product.title}</Typography>
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
          <AddToCartButton onClick={onAddToCart} type="icon" />
        </CardActions>
      </Card>
    </GridItem>
  )
}
