import { store } from "./contactListFilter";

const IS_LOGIN = 'IS_LOGIN';
const IS_NOT_LOGIN = 'IS_NOT_LOGIN';

const isLogin = {
    type: IS_LOGIN,
    payload: true
};

const isNotLogin = {
    type: IS_NOT_LOGIN,
    payload: false
};

//reduccer
export function loginCheckReducer(state = store, action){
    switch(action.type){
        case IS_LOGIN: {
            return {
                ...state, loginCheck: action.payload
            }
        }
        case IS_NOT_LOGIN: {
            return {
                ...state, loginCheck: action.payload
            }
        }
    }
    return state;
}