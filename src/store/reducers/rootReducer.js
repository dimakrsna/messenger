import { createStore  } from 'redux';
import { combineReducers  } from 'redux';

import { contactListFilterReducer } from './contactListFilterReducer';
import { loginCheckReducer } from './../reducers/loginCheckReducer';
import { currentCLientReducer } from './../reducers/currentClientReducer';

const rootReducer = combineReducers({
    clients: contactListFilterReducer,
    currentUser: loginCheckReducer,
    curerntClient: currentCLientReducer
})

export const store = createStore(rootReducer);