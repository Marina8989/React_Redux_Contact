const initialState = 1;
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

function counterReducer(state=initialState, action){
    if(action.type === INCREMENT_COUNTER){
      return state + 1;
    }
   return state
}

export default counterReducer;