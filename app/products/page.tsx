import { getProducts } from '@/services/api/products'

import { ProductList } from './components/product-list'

const ProductsPage = async () => {
  const { products } = await getProducts()
  return (
    <section>
      <h1>Products</h1>
      <ProductList products={products} />
    </section>
  )
}

export default ProductsPage
