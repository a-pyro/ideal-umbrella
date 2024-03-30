import { z } from 'zod'

import { API_URL, ResposeParse, tryAction } from './common'

const ProductParse = z.object({
  brand: z.string(),
  category: z.string(),
  description: z.string(),
  discountPercentage: z.number(),
  id: z.number(),
  images: z.array(z.string()),
  price: z.number(),
  rating: z.number(),
  stock: z.number(),
  thumbnail: z.string(),
  title: z.string(),
})

const ProductsResponse = z
  .object({
    products: z.array(ProductParse),
  })
  .merge(ResposeParse)

export type Product = z.infer<typeof ProductParse>

type ProductsResponse = z.infer<typeof ProductsResponse>

export const getProducts = async () =>
  tryAction(async () => {
    const response = await fetch(`${API_URL}/products`)
    const { products } = ProductsResponse.parse(await response.json())
    return products
  })
