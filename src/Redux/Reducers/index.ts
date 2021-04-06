import { combineReducers } from 'redux';
import { counterReducer } from './counter';

export const RootReducer = combineReducers({
    counterReducer,
});
