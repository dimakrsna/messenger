import React from 'react';
import {mainData} from "./../../data/mainData";

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

        // console.log(value);
        // console.log(state);

        filtered = state.mainData.filter(function(item){
                return item.name.toLowerCase().search(value) !== -1;
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

