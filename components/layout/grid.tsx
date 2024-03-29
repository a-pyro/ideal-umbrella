import type { GridTypeMap } from '@mui/material'
import { Grid } from '@mui/material'

export const GridItem = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid item {...props}>
    {children}
  </Grid>
)

export const GridContainer = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid container {...props}>
    {children}
  </Grid>
)
