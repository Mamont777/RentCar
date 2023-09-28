import { combineReducers } from 'redux';
import { carsReducer } from './cars/carsSlice';

export const rootReducer = combineReducers({
    cars: carsReducer,
});
