'use client'
import Button, { type ButtonProps } from '@mui/material/Button'

export const UButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>
}
