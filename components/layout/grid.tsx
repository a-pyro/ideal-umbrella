'use client'
import type { GridTypeMap } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export const GridItem = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid {...props}>{children}</Grid>
)

export const GridContainer = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid container {...props}>
    {children}
  </Grid>
)
