import type { ApiResponse } from './common'
import { API_URL, tryAction } from './common'

export type Product = {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

type ProductsResponse = ApiResponse<{ products: Product[] }>

export const getProducts = async () =>
  tryAction(async () => {
    const response = await fetch(`${API_URL}/products`)
    const products = (await response.json()) as ProductsResponse
    return products
  })
