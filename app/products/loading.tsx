import { Box, CircularProgress } from '@mui/material'

// TODO: Add a better loading ui, maybe skeleton/fetch data individually and stream it with suspense
const Loading = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loading
