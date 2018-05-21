import React from 'react';
import {mainData} from "./../../data/mainData";
import { createStore } from 'redux';

const initialState = mainData;

function reducer(state = initialState, action){
    switch(action.type){
        case 'FILTERED': {
            return {
                ...state, this: action.payload
            }
        }
    }
    return state;
}
const store = createStore(reducer);

const filteredData = {
    type: 'FILTERED',
    payload: {}
}

console.log(store.getState());

store.dispatch(filteredData);

console.log(store.getState());


export class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mainData: mainData,
            // filteredData: []
        };
    }

    filterContactList(event, state) {
        let value = event.target.value,
            filtered;

        filtered = state.mainData.filter(function(item){
                return item.name.toLowerCase().search(value.toLowerCase()) !== -1;
            });

        console.log(filtered);

        // this.setState({filteredData: filtered});
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

