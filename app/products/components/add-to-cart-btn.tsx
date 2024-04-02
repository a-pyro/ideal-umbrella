import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import type { ButtonProps, IconButtonProps } from '@mui/material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'

type Props = {
  onClick: () => Promise<void> | void
  type: 'button' | 'icon'
}
export const AddToCartButton = ({ onClick, type }: Props) => {
  const { enqueueSnackbar } = useSnackbar()
  const WrapperComponet =
    type === 'button'
      ? Button
      : (IconButton as (props: ButtonProps | IconButtonProps) => JSX.Element)

  return (
    <WrapperComponet
      color="primary"
      onClick={async () => {
        await onClick()
        enqueueSnackbar('Added to cart')
      }}
    >
      <Stack alignItems="center" direction="row" spacing={1}>
        <AddCircleOutlineIcon sx={{ mr: 1 }} />
        {type === 'button' && <Typography>Add to cart</Typography>}
      </Stack>
    </WrapperComponet>
  )
}
