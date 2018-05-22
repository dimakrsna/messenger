import React from 'react';
import {ContactsList} from "./ContactsList";
import {Search, store} from "./Search";
import { connect, Provider } from 'react-redux';

const mapStateToProps = (state) => {
    return {...store, state}
}

const WrappedContactsList = connect(mapStateToProps)(ContactsList)

export class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <header className="aside-nav clear">
                    <Search />
                </header>
                <Provider store={store}>
                    <WrappedContactsList />
                </Provider>
            </aside>
        )
    }
}