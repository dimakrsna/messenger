import React from 'react';
import { NavLink } from "react-router-dom";
import PerfectScrollbar from 'perfect-scrollbar';
import $ from 'jquery';
import { store } from './../../store/reducers/rootReducer';


export class ContactsList extends React.Component {
    _vars = {
        currentElementId: '',
    }

    putActiveItemId = (elem) => {
        let $currentElement = $(elem.target);

        if(!$currentElement.hasClass('client-item')){
            $currentElement = $(elem.target).parents('.client-item');
        }

        this._vars.currentElementId = $currentElement.data('element-id');
    }

    componentDidMount(){
        new PerfectScrollbar(this.refs.clientsRef);
    }

    render() {

        let self = this,
            listData;

        listData = (this.props.state.clients.filtered) ? this.props.state.clients.filtered : this.props.state.clients;

        return (
            <div className="clients" ref="clientsRef">
                {listData.map(function (item) {
                    return (
                        <NavLink to={"/" + item.id} data-element-id={item.id} className="client-item"
                            key={item.id} activeClassName="active" onClick={(e) => {self.putActiveItemId(e)}}>
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