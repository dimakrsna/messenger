export const CURRENT_CLIENT_ID = 'CURRENT_CLIENT_ID';

export const currentClientAction = (clientId) => {
    return {
        type: CURRENT_CLIENT_ID,
        payload: clientId
    }
};
