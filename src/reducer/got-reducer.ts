import { createReducer } from '@reduxjs/toolkit';
import { gotModel } from '../models/got-model';
import * as ac from './action-creator';
const initialState: Array<gotModel> = [];
export const taskReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ac.loadGotAction, (state, action) => [...action.payload])
        .addCase(ac.addGotAction, (state, action) => [...state, action.payload])
        .addCase(ac.updateGotAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteGotAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});
