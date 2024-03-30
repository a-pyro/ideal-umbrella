'use client'

import type { Product } from '@/services/api/products'

type Props = {
  product: Product
}

export const ProductDetailView = ({ product }: Props) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.priceLabel}</p>
    </div>
  )
}
