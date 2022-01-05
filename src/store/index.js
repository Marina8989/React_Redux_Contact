import {createStore, combineReducers} from "redux";
import todos from "./todos";

const reducers = combineReducers({
    todos
})
export const store = createStore(reducers)