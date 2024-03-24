'use client';
import Button, { type ButtonProps } from '@mui/material/Button';

export const UButton = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>{children}</Button>
);
