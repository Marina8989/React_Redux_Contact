const initialState = {
    data: []
}

export const ADD_DELETED_USER = "ADD_DELETED_USER";

function deletedUserReducer(state=initialState, action){
   switch(action.type){
     case ADD_DELETED_USER:
         return {
             ...state,
             data: [...state.data, action.payload]
         }
       default:
           return state
   }
}

export default deletedUserReducer