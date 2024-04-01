import { z } from 'zod'

import { formatCurrency } from '@/utils'

import { API_URL, ResposeParse, tryAction } from '../common'

const ApiProductSchema = z.object({
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

// probably wanna pass currency as a parameter
// definetly wanna pass locale and currency as parameters.
// TODO: Move this parse after getting user data & preferences
const ProductSchema = ApiProductSchema.transform((product) => ({
  ...product,
  priceLabel: formatCurrency(product.price),
}))

const ProductsResponseSchema = z
  .object({
    products: z.array(ProductSchema),
  })
  .merge(ResposeParse)

export type ApiProduct = z.infer<typeof ApiProductSchema>

export type Product = z.infer<typeof ProductSchema>

export const getProducts = async () =>
  tryAction(async () => {
    const response = await fetch(`${API_URL}/products`)
    const { products } = ProductsResponseSchema.parse(await response.json())
    return { products }
  })

export const getProduct = async (id: string) =>
  tryAction(async () => {
    const response = await fetch(`${API_URL}/products/${id}`)
    const product = ProductSchema.parse(await response.json())
    return { product }
  })

export type CartProduct = {
  product: Product
  quantity: number
}

export type Cart = {
  products: Product[]
}
