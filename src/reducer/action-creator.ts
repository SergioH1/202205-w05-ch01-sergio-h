import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action-types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadGotActions = createAction(
    actionTypes['Got@load'].toLocaleString()
);
export const addGotActions = createAction(
    actionTypes['Got@add'].toLocaleString()
);
export const updateGotActions = createAction(
    actionTypes['Got@update'].toLocaleString()
);
export const deleteGotActions = createAction(
    actionTypes['Got@delete'].toLocaleString()
);
