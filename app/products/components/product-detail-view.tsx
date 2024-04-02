'use client'
/* eslint-disable @next/next/no-img-element -- no need */
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Box, Button, Divider, Rating, Stack, Typography } from '@mui/material'

import { addToCart } from '@/app/api/cart/actions'
import type { Product } from '@/app/api/products/fetch'
import { GridContainer, GridItem } from '@/components'
import { useCart } from '@/components/context'

import { AddToCartButton } from './add-to-cart-btn'

type Props = {
  product: Product
}

export const ProductDetailView = ({ product }: Props) => {
  const firstImage = product.images[0]
  const middleImages = product.images.slice(1, -1)
  const lastImage = product.images[product.images.length - 1]
  const [, setCart] = useCart()

  return (
    <Stack pb={4} spacing={2}>
      <GridContainer spacing={2}>
        <GridItem md={4} sm={12} xs={12}>
          <img
            alt={product.title}
            src={firstImage}
            style={{ height: '100%', objectFit: 'cover', width: '100%' }}
          />
        </GridItem>

        {middleImages.length > 0 && (
          <GridItem md={4} sm={12} xs={12}>
            <Stack>
              {middleImages.map((img, idx) => (
                <Box key={img}>
                  <img
                    alt={`${product.title} ${idx + 1}`}
                    src={img}
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </GridItem>
        )}

        {product.images.length > 1 && (
          <GridItem md={4} sm={12} xs={12}>
            <img
              alt={`${product.title} pic`}
              src={lastImage}
              style={{ height: '100%', objectFit: 'cover', width: '100%' }}
            />
          </GridItem>
        )}
      </GridContainer>
      <Stack
        direction="row"
        divider={<Divider flexItem orientation="vertical" />}
      >
        <Stack flex={2} mr="auto" px={2}>
          <Typography fontWeight={600} variant="h5">
            {product.title}
          </Typography>
          <Typography>{product.description}</Typography>
        </Stack>
        <Stack flex={1} px={2}>
          <Typography variant="h6">{product.priceLabel}</Typography>
          <Rating name="read-only" readOnly value={product.rating} />

          <Stack
            alignItems="center"
            direction="row"
            display={['none', 'block']}
            mt={3}
          >
            <AddToCartButton
              onClick={async () => {
                setCart(await addToCart(product.id))
              }}
              type="button"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        display={['block', 'none']}
        mt={3}
      >
        <Button
          color="primary"
          onClick={async () => {
            setCart(await addToCart(product.id))
          }}
        >
          <AddCircleOutlineIcon sx={{ mr: 1 }} />
          Add to cart
        </Button>
      </Stack>
    </Stack>
  )
}
