import {ADD_TODO, REMOVE_TODO} from './index';
import {addRemovedTodo} from '../deletedTodos/actions';

export const addTodo = (value) => {
   return {
       type: ADD_TODO,
       payload: value
   }
}

export const removeTodo = (value) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_TODO,
        payload: value
    })
    dispatch(addRemovedTodo(value))
}