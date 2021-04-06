import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { imageReducer } from './images';

export const RootReducer = combineReducers({
    counterReducer,
    imageReducer,
});
