import { INCREMENT_COUNTER, DECREMENR_COUNTER } from './index';

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