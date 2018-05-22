import { createStore } from 'redux';
import { mainData } from "./../data/mainData";

//initial state
const initialState = mainData;

//constants (action.type)
const ACTION_FILTERED_CONTACT_LIST = 'ACTION_FILTERED_CONTACT_LIST';

//store
const store = createStore(rootReducer);

//action
const filteredData = {
    type: ACTION_FILTERED_CONTACT_LIST,
    payload: null
};

//reducer
function rootReducer(state = initialState, action){
    switch(action.type){
        case ACTION_FILTERED_CONTACT_LIST: {
            return {
                ...state, filtered: action.payload
            }
        }
    }
    return state;
}


export { store, filteredData }