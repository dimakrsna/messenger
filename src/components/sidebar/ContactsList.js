import React from 'react';
import {NavLink} from "react-router-dom";
import {Redirect} from 'react-router';
import {mainData} from "./../../data/mainData";
// import PerfectScrollbar from 'perfect-scrollbar';
// import $ from 'jquery';

export class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: mainData}
    }

    componentDidMount(){
        this.clientsRef = this.refs.clientsRef;
        // $(this.clientsRef).fadeOut(1000);
        // const ps = new PerfectScrollbar(this.clientsRef);
    }

    render() {
        let self = this;

        return (
            <div className="clients" ref="clientsRef">
                {this.state.contacts.map(function (item) {
                    return (
                        <NavLink to={"/" + item.id} className="client-item" key={item.id} activeClassName="active">
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