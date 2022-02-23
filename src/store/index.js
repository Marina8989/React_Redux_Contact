import {combineReducers, createStore} from 'redux';
import counter from './counter'

const reducers = combineReducers({
    counter
})

export const store = createStore(reducers)