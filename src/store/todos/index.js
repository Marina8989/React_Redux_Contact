const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const GET_USER_PENDING = "GET_USER_PENDING";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const REMOVE_USER = "REMOVE_USER";


const todosReducer = (state=initialState, action) => {
    switch(action.type){ 
        case GET_USER_PENDING:
            return {
                ...state,
                isLoading: true
            } 
        case GET_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }  
        case GET_USER_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false
            }  
        case REMOVE_USER:
            return {
                ...state,
                data: state.data.filter(el => el.id !== action.payload.id)
            }       
        default:
            return state;
    }
}

export default todosReducer