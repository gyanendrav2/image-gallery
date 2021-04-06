import { COUNTER } from '../ActionTypes';

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COUNTER.INCREMENT: {
            return { ...state, count: action.payload };
        }
        case COUNTER.DECREMENT: {
            return { ...state, count: action.payload };
        }
        default: {
            return { ...state };
        }
    }
};

