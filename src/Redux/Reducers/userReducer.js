import { GET_ALL_USERS, GET_USER_FAILURE, GET_USER_REQUEST } from "../Actions/userActions";

const initialState={
    users: [],
    loading: false,
    error: null,
    totalPages: 0
}

const userReducer=(state= initialState, action)=>{
    switch(action.type){
        case GET_USER_REQUEST:
            return {...state, loading: true, error: null}
        case GET_ALL_USERS:
            return {...state, users: action.payload,totalPages: action.totalPages, loading: false, error: null}
        case GET_USER_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}

export default userReducer;