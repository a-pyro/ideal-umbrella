/* eslint-disable @next/next/no-img-element -- no need */
import { Box, Stack } from '@mui/material'

import { GridContainer, GridItem } from '@/components'
import type { Product } from '@/services/api/products'

type Props = {
  product: Product
}

export const ProductDetailView = ({ product }: Props) => {
  const firstImage = product.images[0]
  const middleImages = product.images.slice(1, -1)
  const lastImage = product.images[product.images.length - 1]

  return (
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
                  style={{ height: '100%', objectFit: 'cover', width: '100%' }}
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
  )
}
