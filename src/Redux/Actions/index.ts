import { COUNTER } from '../ActionTypes';

export const incrementAction = (value: number) => {
    return {
        type: COUNTER.INCREMENT,
        payload: value,
    };
};

export const decrementAction = (value: number) => {
    return {
        type: COUNTER.DECREMENT,
        payload: value,
    };
};
