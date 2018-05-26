export const USER_IS_LOGIN = 'USER_IS_LOGIN';
export const USER_NOT_FOUND = 'USER_NOT_FOUND';

export const userIsLogin = (currentUser) => {
    return {
        type: USER_IS_LOGIN,
        payload: currentUser
    }
};

export const userNotFound = {
    type: USER_NOT_FOUND,
    payload: false
};