import React from 'react';
import {mainData} from "./../../data/mainData";

export class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {mainData: mainData};
    }

    test(event, state) {
        let value = event.target.value;

        console.log(value);
        console.log(state);
    }

    render() {
        return (
            <div className="search">
                <label className="search__icon" htmlFor="searchInput"></label>
                <input type="text" placeholder="CLIENTS" id="searchInput" className="search__input"
                       onChange={(event) => ( this.test(event, this.state) )}/>
            </div>
        )
    }
}

