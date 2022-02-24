import { INCREMENT_NUMBER, DECREASE_NUMBER, COUNTER_NUMBER } from './index';

export const incrementNumber = () => {
    return {
        type: INCREMENT_NUMBER
    }
}

export const decreaseNumber = () => {
    return {
        type: DECREASE_NUMBER
    }
}

export const counterUserNumber = (userItem) => {
    return {
        type: COUNTER_NUMBER,
        payload: parseInt(userItem)
    }
}