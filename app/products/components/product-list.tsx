'use client'
import type { Product } from '@/app/api/products/fetch'
import { GridContainer } from '@/components/layout/grid'

import { ProductCard } from './product-card'

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <GridContainer mx={-1}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          onAddToCart={() => {
            // Add to cart logic
          }}
          product={product}
        />
      ))}
    </GridContainer>
  )
}
