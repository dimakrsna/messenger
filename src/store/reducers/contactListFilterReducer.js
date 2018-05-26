import { mainData } from './../../data/mainData';
import { ACTION_FILTERED_CONTACT_LIST } from './../actions/contactListFilterAction';

const initialState = mainData;

export function contactListFilterReducer(state = initialState, action){
    switch(action.type){
        case ACTION_FILTERED_CONTACT_LIST: {
            return {
                filtered: action.payload
            }
        }
    }
    return state;
}