import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./Reducers/userReducer";
import { thunk } from "redux-thunk";
import themeReducer from "./Reducers/themeReducer";

const rootReducer= combineReducers({
    users: userReducer,
    theme: themeReducer
})

const store= legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;

