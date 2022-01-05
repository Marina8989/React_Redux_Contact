const initialState = {
    data: ['buy a house', 'get a car', 'get a new job']
}

export const ADD_TODO = "ADD_TODO";

const todosReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state;
    }
}

export default todosReducer