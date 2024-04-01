'use client'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import type { ButtonProps, IconButtonProps } from '@mui/material'
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useMemo, useState } from 'react'

import { addToCart, clearCart, removeFromCart } from '@/app/api/cart/actions'
import type { Product } from '@/app/api/products/fetch'

import { useCart } from './context'

type CartProduct = Product & { quantity: number }

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useCart()

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setIsOpen(open)
    }

  const cartProducts = useMemo(
    () =>
      cart.products.reduce<CartProduct[]>((acc, product) => {
        const existingProduct = acc.find((p) => p.id === product.id)
        if (existingProduct) {
          return acc.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
          )
        }
        return [...acc, { ...product, quantity: 1 }]
      }, []),
    [cart.products],
  )

  return (
    <aside>
      <ShoppingCartButton
        onClick={toggleDrawer(true)}
        totalItems={cart.products.length}
      />
      <Drawer anchor="right" onClose={toggleDrawer(false)} open={isOpen}>
        <Stack
          flexGrow={1}
          onKeyDown={toggleDrawer(false)}
          px={3}
          py={2}
          role="presentation"
          width={['100vw', '60vw', '40vw']}
        >
          <List>
            <Stack direction="row">
              <Typography variant="h6">Carrello</Typography>
              <IconButton onClick={toggleDrawer(false)} sx={{ ml: 'auto' }}>
                <HighlightOffIcon />
              </IconButton>
            </Stack>
            {cartProducts.map(({ id, quantity, thumbnail, title }) => (
              <ListItem disablePadding key={id} sx={{ mb: 1, pl: 0 }}>
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack alignItems="center" direction="row" spacing={2}>
                    <Avatar alt={title} src={thumbnail} />
                    <Typography> {title} </Typography>
                  </Stack>
                  <QuantityHandler
                    onAdd={async () => setCart(await addToCart(id))}
                    onRemove={async () => setCart(await removeFromCart(id))}
                    quantity={quantity}
                  />
                </Stack>
              </ListItem>
            ))}
          </List>
          <ClearCartButton
            onClick={async () => {
              setCart(await clearCart())
              toggleDrawer(false)
            }}
            sx={{ mt: 'auto', pl: 0 }}
          />
        </Stack>
      </Drawer>
    </aside>
  )
}

const ShoppingCartButton = ({
  totalItems,
  ...props
}: IconButtonProps & { totalItems: number }) => {
  return (
    <IconButton {...props}>
      <Badge badgeContent={totalItems} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  )
}

const ClearCartButton = (props: ButtonProps) => {
  return (
    <Button startIcon={<DeleteForeverIcon />} {...props}>
      Svuota carrello
    </Button>
  )
}

const QuantityHandler = ({
  onAdd,
  onRemove,
  quantity,
  sx,
}: {
  onAdd: () => void
  onRemove: () => void
  quantity: number
  sx?: ButtonProps['sx']
}) => {
  return (
    <Stack alignItems="center" direction="row" spacing={1} sx={sx}>
      <IconButton onClick={onRemove}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={onAdd}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Stack>
  )
}
