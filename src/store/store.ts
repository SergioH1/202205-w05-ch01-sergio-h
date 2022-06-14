import { configureStore } from '@reduxjs/toolkit';
import { gotReducer } from '../reducer/got-reducer';

export const store = configureStore({
    reducer: { got: gotReducer },
});
