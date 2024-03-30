'use client'
import { GridContainer } from '@/components/layout/grid'
import type { Product } from '@/services/api/products'

import { ProductCard } from './product-card'

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <GridContainer alignItems="stretch" mx={-1}>
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
