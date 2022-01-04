const initialState = 1;
export const ADD_COUNTER = "ADD_COUNTER";

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COUNTER:
            return state + 1;
       default:
           return state
    }
}

export default counterReducer;