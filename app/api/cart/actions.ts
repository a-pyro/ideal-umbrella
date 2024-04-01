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
      }, 500)
    })
  })
}

export const removeFromCart = async (productId: number) => {
  return tryAction(async () => {
    const { product } = await getProduct(`${productId}`)
    const index = cartDb.findIndex((p) => p.id === product.id)
    if (index === -1) {
      throw new Error('Product not found in cart')
    }
    cartDb.splice(index, 1)
    return new Promise<Cart>((resolve) => {
      setTimeout(() => {
        resolve({
          products: cartDb,
        })
      }, 500)
    })
  })
}

export const clearCart = async () => {
  return tryAction(async () => {
    cartDb.splice(0, cartDb.length)
    return new Promise<Cart>((resolve) => {
      setTimeout(() => {
        resolve({
          products: cartDb,
        })
      }, 500)
    })
  })
}
