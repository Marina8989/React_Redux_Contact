import {REMOVE_TODO} from '../todos';

const initialState = {
    data: []
}

function deletedTodosReducer(state=initialState, action) {
    console.log(action.type)
   switch(action.type){
      case REMOVE_TODO:
          return {
              ...state,
              data: [...state.data, action.payload]
          } 
      default:
          return state;
   }
}

export default deletedTodosReducer;