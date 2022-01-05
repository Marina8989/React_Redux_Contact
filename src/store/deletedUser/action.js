import {REMOVE_USER} from "./index";

export const removeUser = (user) => (dispatch, getState) =>{
   dispatch({
     type: REMOVE_USER,
     payload: user
   })
}