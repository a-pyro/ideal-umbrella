'use server'

import { tryAction } from '../common'
import type { Cart, Product } from '../products/fetch'
import { getProduct } from '../products/fetch'

// fake cart
const cartDb: Product[] = []

export const addToCart = async (productId: number) => {
  return tryAction(async () => {
    const { product } = await getProduct(`${productId}`)
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
