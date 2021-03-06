import { createStore  } from 'redux';
import { combineReducers  } from 'redux';

import { contactListFilterReducer } from './contactListFilterReducer';
import { loginCheckReducer } from './../reducers/loginCheckReducer';

const rootReducer = combineReducers({
    clients: contactListFilterReducer,
    currentUser: loginCheckReducer
})

export const store = createStore(rootReducer);