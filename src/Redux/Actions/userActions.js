import axios from "axios";

export const GET_ALL_USERS= 'GET_ALL_USERS';

export const fetchAllUsers=(page=1)=> async(dispatch)=>{
    try {
        // ?_page=${page}&_limit=6
        const response= await axios.get(`https://jsonplaceholder.typicode.com/users`);
        // console.log(response.data)
        dispatch({
            type: GET_ALL_USERS, 
            payload: response.data,
            totalPages: Math.ceil(response.data.length/5)
        })
    } catch (error) {
        console.log(error.message)
    }
}