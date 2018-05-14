import React from 'react';
import { NavLink } from "react-router-dom";
import { mainData } from "./../../data/mainData";
import PerfectScrollbar from 'perfect-scrollbar';

// history
// docs: https://github.com/ReactTraining/history
import createHistory from "history/createBrowserHistory";

export class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: mainData}
        this.showLocation = this.showLocation.bind(this);
    }

    componentDidMount(){
        new PerfectScrollbar(this.refs.clientsRef);
    }

    showLocation(){
        let history = createHistory();
        let path = history.location.pathname;

        console.log( history );

    }

    render() {
        let self = this;

        return (
            <div className="clients" ref="clientsRef">
                {this.state.contacts.map(function (item) {
                    return (
                        <NavLink to={"/" + item.id} className="client-item" key={item.id} activeClassName="active" onClick={self.showLocation}>
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
        )
    }
}