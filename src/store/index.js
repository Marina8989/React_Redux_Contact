import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "reduxt-thunk";
import todos from "./todos";

const reducers = combineReducers({
    todos
})
export const store = createStore(reducers, applyMiddleware(thunk))