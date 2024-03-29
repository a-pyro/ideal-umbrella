import { getProducts } from '@/services/api/products'

import { ProductList } from './components/product-list'

const ProductsPage = async () => {
  const { products } = await getProducts()
  return (
    <main>
      <h1>Products</h1>
      <ProductList products={products} />
    </main>
  )
}

export default ProductsPage
