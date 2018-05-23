import { createStore  } from 'redux';
// import { combineReducers  } from 'redux';
import { mainData } from "./../data/mainData";

//initial state
const initialState = mainData;

//constants (action.type)
const ACTION_FILTERED_CONTACT_LIST = 'ACTION_FILTERED_CONTACT_LIST';

//action
const filteredData = {
    type: ACTION_FILTERED_CONTACT_LIST,
    payload: null
};

function contactListFilterReducer(state = initialState, action){
    switch(action.type){
        case ACTION_FILTERED_CONTACT_LIST: {
            return {
                ...state, filtered: action.payload
            }
        }
    }
    return state;
}

//reducer
// const rootReducer = combineReducers({
//     contactListFilterReducer,
//
// })

//store
const store = createStore(contactListFilterReducer);

export { store, filteredData }