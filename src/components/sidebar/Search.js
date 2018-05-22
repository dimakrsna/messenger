import React from 'react';
import {mainData} from "./../../data/mainData";
import { createStore } from 'redux';

const initialState = mainData;

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

const ACTION_FILTERED_CONTACT_LIST = 'ACTION_FILTERED_CONTACT_LIST';

//store
const store = createStore(rootReducer);

//action
const filteredData = {
    type: ACTION_FILTERED_CONTACT_LIST,
    payload: null
};

export class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mainData: mainData,
        };
    }

    filterContactList(event, state) {
        let value = event.target.value,
            filtered;

        filtered = state.mainData.filter(function(item){
                return item.name.toLowerCase().search(value.toLowerCase()) !== -1;
            });

        filteredData.payload = filtered;
        store.dispatch(filteredData);
    }

    render() {
        return (
            <div className="search">
                <label className="search__icon" htmlFor="searchInput"></label>
                <input type="text" placeholder="CLIENTS" id="searchInput" className="search__input"
                       onChange={(event) => ( this.filterContactList(event, this.state) )}/>
            </div>
        )
    }
}

export { store };