'use client'
import { ClearAll } from '@mui/icons-material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import type { ButtonProps, IconButtonProps } from '@mui/material'
import { Badge, Button, IconButton, Stack, Typography } from '@mui/material'
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
        <Stack
          flexGrow={1}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          px={3}
          py={2}
          role="presentation"
          width={['100vw', '60vw', '30vw']}
        >
          <List>
            <Stack direction="row">
              <Typography variant="h6">Carrello</Typography>
              <IconButton onClick={toggleDrawer(false)} sx={{ ml: 'auto' }}>
                <HighlightOffIcon />
              </IconButton>
            </Stack>
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
