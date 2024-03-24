import { Grid, GridTypeMap } from '@mui/material';

export const GridItem = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid item {...props}>
    {children}
  </Grid>
);

export const GridContainer = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid container {...props}>
    {children}
  </Grid>
);
