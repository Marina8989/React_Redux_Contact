import { INCREMENT_COUNTER, DECREMENR_COUNTER, USER_NUMBER } from './index';

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENR_COUNTER
    }
}

export const counterNumber = (numberItem) => {
    return {
        type: USER_NUMBER,
        payload: parseInt(numberItem)
    }
}