import { initialState } from './rootReducer';
import { ACTION_FILTERED_CONTACT_LIST } from './../actions/contactListFilterAction';

export function contactListFilterReducer(state = initialState, action){
    switch(action.type){
        case ACTION_FILTERED_CONTACT_LIST: {
            return {
                ...state, filtered: action.payload
            }
        }
    }
    return state;
}