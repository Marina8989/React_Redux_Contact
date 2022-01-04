import {createStore, combineReducers} from "redux";
import counterReducer from "./counterReducer";
import {ADD_COUNTER} from "./counterReducer";

export const incrementCounter = () => {
    return{
        type: ADD_COUNTER
    }
}

const reducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducers);