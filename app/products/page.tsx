import Typography from '@mui/material/Typography'

import { getProducts } from '@/services/api/products'

import { ProductList } from './components/product-list'

const ProductsPage = async () => {
  const { products } = await getProducts()
  return (
    <main>
      <Typography fontWeight={400} variant="h1">
        Products
      </Typography>
      <ProductList products={products} />
    </main>
  )
}

export default ProductsPage
