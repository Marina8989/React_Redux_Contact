import { combineReducers, createStore } from 'redux';
import todos from './todos';
import deletedTodos from './deletedTodos';

const reducers = combineReducers({
    todos,
    deletedTodos
})

export const store = createStore(reducers);