import Typography from '@mui/material/Typography'

import { getProducts } from '@/app/api/products/fetch'
import { PanelWrapper } from '@/components/layout'

import { ProductList } from './components/product-list'

const ProductsPage = async () => {
  const { products } = await getProducts()
  return (
    <PanelWrapper>
      <Typography fontWeight={400} variant="h1">
        Products
      </Typography>
      <ProductList products={products} />
    </PanelWrapper>
  )
}

export default ProductsPage
