'use client'
import { ClearAll } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import type { IconButtonProps } from '@mui/material'
import { Badge, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'

import { clearCart } from '@/app/api/cart/actions'

import { useCart } from './context'

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

  return (
    <aside>
      <ShoppingCartButton
        onClick={toggleDrawer(true)}
        totalItems={cart.products.length}
      />
      <Drawer anchor="right" onClose={toggleDrawer(false)} open={isOpen}>
        <Box
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          role="presentation"
        >
          <List>
            <ShoppingCartButton
              onClick={toggleDrawer(true)}
              totalItems={cart.products.length}
            />

            {cart.products.map(({ id, title }, index) => (
              <ListItem disablePadding key={id}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <ClearAll /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            ))}
            <ClearCartButton
              onClick={async () => {
                setCart(await clearCart())
                toggleDrawer(false)
              }}
            />
          </List>
        </Box>
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

const ClearCartButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <ClearAll />
    </IconButton>
  )
}
