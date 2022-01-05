import {ADD_TODO, DELETE_TODO} from "./index";

export const addTodo = (value) => ({
    type: ADD_TODO,
    payload: value
})

export const deleteTodo = (value) => ({
    type: DELETE_TODO,
    payload: value
})