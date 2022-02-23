import {combineReducers, createStore} from 'redux';

const initialState = 1

function counterReducer(state=initialState, action){
    console.log(action)
   if(action.type === 'INCREMENT_COUNTER') {
    return state + 1;
   }
    return state;
}

export const incrementCounter = () => {
    console.log('clicking')
    return {
        type: 'INCREMENT_COUNTER'
    }
}


const reducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducers)