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
      <Card>
        <CardActionArea>
          <CardMedia
            alt="green iguana"
            component="img"
            height="200"
            image={product.thumbnail}
          />
          <CardContent>
            <Typography component="div" gutterBottom variant="h5">
              {product.title}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <UButton onClick={onAddToCart}>Add to cart</UButton>
        </CardActions>
      </Card>
    </GridItem>
  )
}
