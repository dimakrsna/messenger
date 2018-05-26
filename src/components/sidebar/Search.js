import React from 'react';
import { mainData } from "./../../data/mainData";
import { store } from './../../store/reducers/rootReducer';
import { contactListFilterAction } from './../../store/actions/contactListFilterAction';

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

        store.dispatch(contactListFilterAction(filtered));
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