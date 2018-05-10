import React from 'react';
import {NavLink} from "react-router-dom";
import {Router} from 'react-router';
import {Redirect} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

//import data
import {mainData} from "./../../data/mainData";

export class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: mainData}
    }

    redirectToPath = () => {
        this.props.history.push(`/target`)
    }

    render() {
        let self = this;

        return (
            <Router history={history}>
                <div>
                    {this.state.contacts.map(function (item) {
                        return (
                            <NavLink to={"/" + item.id} className="client-item" key={item.id} onClick={self.redirectToPath}>
                                <img className="client-item__ava" src={item.avatar} alt={item.name}/>
                                <p className="client-item__info">
                                    <span className="client-item__name">{item.name}</span>
                                    <span className="client-item__id">Contract # {item.contract}</span>
                                    <span className="client-item__mess">{item.inboxMessage}</span>
                                </p>
                            </NavLink>
                        )
                    })}
                </div>
            </Router>
        )
    }
}