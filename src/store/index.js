import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "reduxt-thunk";
import todos from "./todos";
import deletedUser from './deletedUser';

const reducers = combineReducers({
    todos,
    deletedUser
})
export const store = createStore(reducers, applyMiddleware(thunk))