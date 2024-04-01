'use client'
import React, { createContext, useContext, useState } from 'react'

import type { Cart } from '@/services/api/products'

const useCartState = () =>
  // eslint-disable-next-line react/hook-use-state -- dont need to use them, just returning the hook invocation
  useState<Cart>({
    products: [],
  })

export const CartContext = createContext<null | ReturnType<
  typeof useCartState
>>(null)

export const useCart = () => {
  const cart = useContext(CartContext)
  if (!cart) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return cart
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useCartState()

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}
