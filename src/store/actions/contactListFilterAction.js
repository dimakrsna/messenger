export const ACTION_FILTERED_CONTACT_LIST = 'ACTION_FILTERED_CONTACT_LIST';

export const contactListFilterAction = (filtered) => {
    return {
        type: ACTION_FILTERED_CONTACT_LIST,
        payload: filtered
    }
};
