import { Box, Skeleton, Typography } from "@mui/material"

const SkeletonRoot = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center'}}>
      <Typography
        variant="h4" 
        align="center" 
        sx={{ mt: 3, mb: 3 }}
      >
        <Skeleton sx={{ width: '40vw'}}/>
      </Typography>

      <Skeleton variant="rectangular" animation="wave" sx={{ width: '60vw', height: '60vh'}} />
    </Box>
  )
}

export default SkeletonRoot