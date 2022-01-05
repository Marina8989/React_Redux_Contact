import axios from "axios";
import {addDeletedUser} from "../deletedUser/action";
import {GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_ERROR, REMOVE_USER} from "./index";

export const getData = () => async (dispatch, getState) => {
   try{
     dispatch({type: GET_USER_PENDING});

     const {data} = await axios("https://rickandmortyapi.com/api/character")
     dispatch({
       type: GET_USER_SUCCESS,
       payload: data.results
     })
   }catch(err){
     dispatch({type: GET_USER_ERROR, payload: err})
   }
}

export const removeUser = (user) => (dispatch, getState) =>{
   dispatch({
     type: REMOVE_USER,
     payload: user
   })
   dispatch(addDeletedUser())
}