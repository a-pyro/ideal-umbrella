'use client'

import { useAppRouter } from '@/router'

export const ProductDetailView = () => {
  const {
    params: { id },
  } = useAppRouter('productDetail')

  return <div>ProductDetailView</div>
}
