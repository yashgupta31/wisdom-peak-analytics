import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Users from './Users'

const Home = () => {
  const isLargerThan1000= useMediaQuery('(min-width: 1000px)');
  const isLargerThan400= useMediaQuery('(min-width: 400px)');
  return (
    <Box p={isLargerThan1000?'0.8rem 3rem': isLargerThan400?'0.4rem 1rem': '0.4rem 0.4rem'} >
        <Users />
    </Box>
  )
}

export default Home