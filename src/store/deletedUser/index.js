const initialState = {
    data: []
}

export const REMOVE_USER = "REMOVE_USER";

function deletedUserReducer(state=initialState, action){
   switch(action.type){
     case REMOVE_USER:
         return {
             ...state,
             data: [...state.data, action.payload]
         }
       default:
           return state
   }
}

export default deletedUserReducer