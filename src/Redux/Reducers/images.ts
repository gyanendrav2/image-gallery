import { IMAGES } from '../ActionTypes';

const initialState = {
    images: [],
};

export const imageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case IMAGES.LIST: {
            return { ...state, images: action.payload };
        }
        default: {
            return { ...state };
        }
    }
};

