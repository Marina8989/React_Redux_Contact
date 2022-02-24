const initialState = 1;
export const INCREMENT_NUMBER = "INCREMENT_NUMBER";
export const DECREASE_NUMBER = "DECREASE_NUMBER";
export const COUNTER_NUMBER = "COUNTER_NUMBER";

function counterReducer(state=initialState, action) {
    switch(action.type){
        case INCREMENT_NUMBER:
            return state + 1;
        case DECREASE_NUMBER:
            return state - 1; 
        case COUNTER_NUMBER:
            return state + action.payload       
        default:
            return state;
    }
}

export default counterReducer