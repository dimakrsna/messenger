import { USER_IS_LOGIN, USER_NOT_FOUND } from './../actions/loginCheckAction';

export function loginCheckReducer(state = null, action){
    switch(action.type){
        case USER_IS_LOGIN: {
            return {
                currentUser: action.payload
            }
        }
        case USER_NOT_FOUND: {
            return {
                currentUser: action.payload
            }
        }
    }
    return state;
}
