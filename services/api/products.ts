import { API_URL } from './common'

// {
//   "products": [
//     {
//       "id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "...",
//       "images": ["...", "...", "..."]
//     },
//     {...},
//     {...},
//     {...}
//     // 30 items
//   ],

//   "total": 100,
//   "skip": 0,
//   "limit": 30
// }

type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

type ApiResponse<T> = {
  total: number
  skip: number
  limit: number
} & T

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`)
  return response.json()
}
