import { mainData } from './../../data/mainData';
import { CURRENT_CLIENT_ID } from './../actions/currentClientAction';

const initialState = mainData;

export function currentCLientReducer(state = initialState[0], action){
    switch(action.type){
        case CURRENT_CLIENT_ID: {
            return {
                currentClient: action.payload
            }
        }
    }
    return state;
}