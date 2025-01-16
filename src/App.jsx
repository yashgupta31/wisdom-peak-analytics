import { useState } from 'react'
import './App.css'
import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SingleUser from './pages/SingleUser/SingleUser'
import { useSelector } from 'react-redux'
import { utils } from './utils/utils'

function App() {
  const currentTheme = useSelector((state) => state.theme.theme);

  return (
    <Box bgcolor={currentTheme== 'light'? '#F4EBE8': utils.dark.primary} minHeight={'100vh'}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/singleuser/:id' element={<SingleUser />} />
    </Routes>
    </Box>
  )
}

export default App
