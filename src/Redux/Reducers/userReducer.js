import { GET_ALL_USERS } from "../Actions/userActions";

const initialState={
    users: [],
    loading: false,
    error: null,
    totalPages: 0
}

const userReducer=(state= initialState, action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return {users: action.payload,totalPages: action.totalPages, loading: false, error: null}
        default:
            return state;
    }
}

export default userReducer;