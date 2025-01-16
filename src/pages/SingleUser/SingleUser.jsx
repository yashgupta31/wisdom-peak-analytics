import { Box, Button, IconButton, Table, TableBody, TableCell, TableRow, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { IoIosCall } from "react-icons/io";
import { IoArrowBackSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAllUsers } from '../../Redux/Actions/userActions';
import { utils } from '../../utils/utils';

const SingleUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const currentTheme = useSelector((state) => state.theme.theme);
  const { users } = useSelector(state => state.users);
  const [singleuser, setSingleUser] = useState({});
  // console.log(users)
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, []);

  useEffect(() => {
    let selectedUser = users.filter((elem) => {
      return elem.id == id;
    })
    setSingleUser(selectedUser[0] || {})
  }, [id, users])
  console.log(singleuser)


  const isLargerThan800 = useMediaQuery('(min-width: 800px)')
  const isLargerThan600 = useMediaQuery('(min-width: 600px)')
  // const isLargerThan500 = useMediaQuery('(min-width: 500px)')
  return (
    <Box pt={'2rem'} >
      <Box bgcolor={currentTheme== 'light'? utils.light.cardBg: utils.dark.cardBg}  width={isLargerThan800 ? '70%' : '96%'} height={isLargerThan600 ? '60vh' : '65vh'} m={'auto'} position={'relative'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <IconButton aria-label="delete" size="large" sx={{ position: 'absolute', left: isLargerThan600 ? '1rem' : '0rem', top: isLargerThan600 ? '1rem' : '-0.2rem' }}>
          <IoArrowBackSharp onClick={() => navigate('/')} style={{color: currentTheme== 'light'? '#282828' :'white' }}/>
        </IconButton>
        <Table sx={{ width: isLargerThan600 ? '75%' : '95%', mt: isLargerThan600 ? '0rem' : '2.1rem' }}>
          <TableBody >
            <TableRow >
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>Name:</TableCell>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>{singleuser.name}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>Email:</TableCell>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>{singleuser.email}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>Mobile:</TableCell>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>{singleuser.phone}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>Company Name:</TableCell>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>{singleuser.company?.name || 'N/A'}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>Website:</TableCell>
              <TableCell align="start" sx={{color: currentTheme== 'light'?'#282828':'white'}}>{singleuser.website}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* <TableRow>
          <TableCell align="center">
            <Button variant="contained" endIcon={<IoMdSend />}>
            Send Mail
          </Button>
          </TableCell>
          <TableCell align="center">
            <Button variant="contained"  sx={{ width: '100%' }} endIcon={<IoIosCall />}>
            Call
          </Button>
          </TableCell>
        </TableRow> */}


        <Box width={isLargerThan600 ? '75%' : '95%'} display={'flex'} justifyContent={'space-between'} mt={'1rem'}>
          <Button variant="contained" size='small' sx={{ width: '49%' }} endIcon={<IoMdSend />}>
            Send Mail
          </Button>

          <Button variant="contained" sx={{ width: '49%' }} color='success' endIcon={<IoIosCall />}>
            Call
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SingleUser