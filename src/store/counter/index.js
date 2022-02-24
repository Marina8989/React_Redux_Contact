const initialState = 1;
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENR_COUNTER = "DECREMENR_COUNTER";

function counterReducer(state=initialState, action){
    switch(action.type){
       case INCREMENT_COUNTER:
           return state + 1;
       case DECREMENR_COUNTER:
           return state - 1;
       default: 
           return state;     
    }
}

export default counterReducer;