import { getProduct } from '@/app/api/products/fetch'
import { PanelWrapper } from '@/components/layout'
import type { PageProps } from '@/router'

import { ProductDetailView } from '../components/product-detail-view'

const ProductPage = async ({ params: { id } }: PageProps<'productDetail'>) => {
  const { product } = await getProduct(id)
  return (
    <PanelWrapper>
      <ProductDetailView product={product} />
    </PanelWrapper>
  )
}

export default ProductPage
