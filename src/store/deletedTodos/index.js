const initialState = {
    data: []
}

export const ADD_REMOVED_TODO = "ADD_REMOVED_TODO";

function deletedTodosReducer(state=initialState, action) {
    console.log(action.type)
   switch(action.type){
      case ADD_REMOVED_TODO:
          return {
              ...state,
              data: [...state.data, action.payload]
          } 
      default:
          return state;
   }
}

export default deletedTodosReducer;