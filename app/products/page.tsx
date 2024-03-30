import Typography from '@mui/material/Typography'

import { PanelWrapper } from '@/components/layout'
import { getProducts } from '@/services/api/products'

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
