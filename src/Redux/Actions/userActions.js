import axios from "axios";

export const GET_ALL_USERS= 'GET_ALL_USERS';
export const GET_USER_REQUEST= 'GET_USER_REQUEST';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const fetchAllUsers=(page=1)=> async(dispatch)=>{
    try {
        // ?_page=${page}&_limit=6
        dispatch({type: GET_USER_REQUEST})
        const response= await axios.get(`https://jsonplaceholder.typicode.com/users`);
        // console.log(response.data)
        dispatch({
            type: GET_ALL_USERS, 
            payload: response.data,
            totalPages: Math.ceil(response.data.length/5)
        })
    } catch (error) {
        dispatch({type: GET_USER_FAILURE, payload: error.message})
        // console.log(error.message)
    }
}