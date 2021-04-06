import axios from 'axios';
import { API } from '../../utility';
import { COUNTER, IMAGES } from '../ActionTypes';

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

export const getUnsplashImagesAPIcall = () => {
    return (dispatch: any) => {
        API.get('/photos', { params: { per_page: 50 } })
            .then((res) => {
                dispatch(imageListAction(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const imageListAction = (data: any) => {
    return {
        type: IMAGES.LIST,
        payload: data,
    };
};
