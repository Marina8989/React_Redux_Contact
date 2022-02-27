import {ADD_REMOVED_TODO} from './index';

export const addRemovedTodo = (user) => (dispatch, getState) => {
    dispatch({
        type: ADD_REMOVED_TODO,
        payload: user
    })
}