import { createStore  } from 'redux';
import { combineReducers  } from 'redux';

import { mainData } from "./../../data/mainData";

import { contactListFilterAction } from './../actions/contactListFilterAction';
import { contactListFilterReducer } from './contactListFilterReducer';

export const initialState = mainData;

const store = createStore(contactListFilterReducer);

export { store, contactListFilterAction }