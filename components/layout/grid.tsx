import { Grid, GridTypeMap } from '@mui/material';

export const GridItem = ({ children, ...props }: GridTypeMap['props']) => (
  <Grid item {...props}>
    {children}
  </Grid>
);

type GridContainerProps = GridTypeMap['props'] & {
  items: React.ReactElement[];
};
export const GridContainer = ({
  children,
  items,
  ...props
}: GridContainerProps) => (
  <Grid container {...props}>
    {items.map((item, index) => (
      <GridItem key={index}>{item}</GridItem>
    ))}
  </Grid>
);
