import { Box, MenuItem, Pagination, Select, TextField, Typography, useMediaQuery } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../../Redux/Actions/userActions'
import { useMatch, useNavigate, useSearchParams } from 'react-router-dom';
import './Users.css';
import { utils } from '../../utils/utils';

const Users = () => {
    const dispatch = useDispatch()
    const currentTheme = useSelector((state) => state.theme.theme);
    const { users } = useSelector(state => state.users);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPageFromParams = parseInt(searchParams.get('page')) || 1;
    const currentSearchFromParams = searchParams.get('search') || '';
    const currentAlphaSort = searchParams.get('sort') || 'default';

    const [currentPage, setCurrentPage] = useState(currentPageFromParams);
    const [searchQuery, setSearchQuery] = useState(currentSearchFromParams);
    const [sortOrder, setSortOrder] = useState(currentAlphaSort);


    useEffect(() => {
        setSearchParams({ page: currentPage, search: searchQuery, sort: sortOrder })
    }, [currentPage, searchQuery, sortOrder])

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])



    const limit = 6; // Number of items per page

    // Handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // Paginated and filtered users
    const paginatedUsers = users.slice((currentPage - 1) * limit, currentPage * limit);

    // Total pages
    const totalPages = Math.ceil(users.length / limit);

    // -------screen sizes-------
    const isLargerThan1350 = useMediaQuery('(min-width: 1350px)');
    const isLargerThan1000 = useMediaQuery('(min-width: 1000px)');
    const isLargerThan700 = useMediaQuery('(min-width: 700px)');
    const isLargerThan500 = useMediaQuery('(min-width: 500px)');
    const isLargerThan400 = useMediaQuery('(min-width: 400px)');

    return (
        <Box>
            {/* ------search & filter------- */}
            <Box width={'100%'} mt={'1.4rem'}>
                <TextField size='small' placeholder="Search name.." sx={{ width: isLargerThan500 ? '50%' : '55%', mr: '0.5rem', borderColor: '1px solid white' }} onChange={(e) => setSearchQuery(e.target.value)} />
                <Select size='small' defaultValue={sortOrder} onChange={(e) => setSortOrder(e.target.value)} sx={{ width: isLargerThan700 ? '20%' : isLargerThan500 ? '30%' : '40%' }}>
                    {/* <option value={'placeholder'}>Placeholder</option> */}
                    <MenuItem value={'default'}>Default</MenuItem>
                    <MenuItem value={'ascending'}>Ascending</MenuItem>
                    <MenuItem value={'descending'}>Descending</MenuItem>
                </Select>
            </Box>
            {/* ---------- */}
            {/* --------card container--------- */}
            <Box mt={'1rem'} display={'flex'} flexWrap={'wrap'} height={'70vh'} sx={{overflowY: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': {display: 'none'  } }}>
                {/* --------each card------- */}
                {
                    paginatedUsers
                        .filter((elem) => {
                            return elem.name.toLowerCase().includes(searchQuery.toLowerCase())
                        })
                        .sort((a, b) => {
                            if (sortOrder === 'ascending') {
                                return a.name.localeCompare(b.name); // Ascending order
                            } else if (sortOrder === 'descending') {
                                return b.name.localeCompare(a.name); // Descending order
                            }
                            return 0; // Default order
                        })
                        .map((elem, index) => (
                            <Box key={index} className={'eachUser'} width={isLargerThan1350 ? '32%' : isLargerThan1000 ? '32%' : isLargerThan700 ? '49%' : isLargerThan400 ? '90%' : '99%'} height={'13rem'} onClick={() => navigate(`/singleuser/${elem.id}`)} color={currentTheme == 'light' ? '#181818' : 'white'} bgcolor={currentTheme == 'light' ? utils.light.cardBg : utils.dark.cardBg} ml={'auto'} mr={'auto'} mb={'1rem'} p={'1rem'} borderRadius={'8px'} position={'relative'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} sx={{ cursor: 'pointer' }}>
                                <Box>
                                    <Typography sx={{ fontSize: '1.7rem', borderBottom: '1px solid grey', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{elem.name}</Typography>
                                    <Typography sx={{ fontSize: '1.1rem' }}>Name</Typography>
                                    <Typography sx={{ fontSize: '0.9rem' }}>{elem.name}</Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontSize: '1.1rem' }}>Email</Typography>
                                    <Typography sx={{ fontSize: '0.9rem' }}>{elem.email}</Typography>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontSize: '1.1rem' }}>City</Typography>
                                    <Typography sx={{ fontSize: '0.9rem' }}>{elem.address.city}</Typography>
                                </Box>

                                <Box bgcolor={'#F87C58'} className={'each-user-animation'} width={'100%'} height={'28%'} position={'absolute'} sx={{ opacity: '40%' }} top={0} right={0} borderRadius={'0% 0% 0% 0%'} ></Box>

                            </Box>
                        ))
                }

            </Box>

            {/* -----pagination------- */}
            <Pagination count={totalPages} sx={{ mt: '1rem', bgcolor: currentTheme=='light'? '': 'white', width: '10rem' }} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </Box>
    )
}

export default Users