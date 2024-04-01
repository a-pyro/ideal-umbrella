'use client'
import { addToCart } from '@/app/api/products/actions'
import type { Product } from '@/app/api/products/fetch'
import { useCart } from '@/components/context'
import { GridContainer } from '@/components/layout/grid'

import { ProductCard } from './product-card'

export const ProductList = ({ products }: { products: Product[] }) => {
  const [, setCart] = useCart()
  const handleAddToCart = (productId: number) => async () =>
    setCart(await addToCart(productId))

  return (
    <GridContainer mx={-1}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          onAddToCart={handleAddToCart(product.id)}
          product={product}
        />
      ))}
    </GridContainer>
  )
}
