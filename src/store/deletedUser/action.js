import {ADD_DELETED_USER} from './index';

export const addDeletedUser = (user) => ({
   type: ADD_DELETED_USER,
   payload: user
})