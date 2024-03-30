'use client'
import Image from 'next/image'

import { GridItem, UButton } from '@/components'
import { type Product } from '@/services/api/products'

export const ProductCard = ({
  onAddToCart,
  product,
}: {
  onAddToCart: () => void
  product: Product
}) => {
  return (
    <GridItem md={4} padding={4} sm={6} width={100} xs={12}>
      <Image
        alt={product.title}
        height={300}
        layout="responsive"
        objectFit="contain"
        src={product.thumbnail}
        width={500}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Rating: {product.rating}</p>
      <UButton onClick={onAddToCart}>Add to cart</UButton>
    </GridItem>
  )
}
