'use server'

import { tryAction } from '../common'

import type { Cart, Product } from './fetch'
import { getProducts } from './fetch'

// fake cart
const cartDb: Product[] = []

export const addToCart = async (productId: number) => {
  'use server' // mimik server action
  return tryAction(async () => {
    const products = await getProducts()
    const product = products.products.find((p) => p.id === productId)
    if (!product) {
      throw new Error('Product not found')
    }
    cartDb.push(product)
    return new Promise<Cart>((resolve) => {
      setTimeout(() => {
        resolve({
          products: cartDb,
        })
      }, 1000)
    })
  })
}
