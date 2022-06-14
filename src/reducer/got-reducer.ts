import { createReducer } from '@reduxjs/toolkit';
import { gotModel } from '../models/got-model';
import * as ac from './action-creator';
const initialState: Array<gotModel> = [];
// const initialState: gotModel[] = [];

export const gotReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadGotAction, (state, action) => [...action.payload])
        .addCase(ac.addGotAction, (state, action) => [...state, action.payload])
        .addCase(ac.updateGotAction, (state, action) =>
            state.map(
                (item) =>
                    item.id === action.payload.id ? action.payload : item
                // buscamos el id del personaje/ item con la accion del payload y si es distinto lo actualizamos
                // y si no devolvemos el mismo : item
            )
        )
        .addCase(
            ac.deleteGotAction,
            (state, action) =>
                state.filter((item) => item.id !== action.payload.id)
            // filter devuelve el personaje/item
        )
        .addDefaultCase((state) => state);
});
