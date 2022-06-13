import { createAction } from '@reduxjs/toolkit';

import { gotModel } from '../models/got-model';
import { actionTypes } from './action-types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadGotAction = createAction<Array<gotModel>>(
    actionTypes['Got@load'].toLocaleString()
);

export const addGotAction = createAction<gotModel>(
    actionTypes['Got@add'].toLocaleString()
);

export const updateGotAction = createAction<gotModel>(
    actionTypes['Got@update'].toLocaleString()
);

export const deleteGotAction = createAction<gotModel>(
    actionTypes['Got@delete'].toLocaleString()
);
