import React from 'react';
import {ContactsList} from "./ContactsList";
import {Search} from "./Search";

export class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <header className="aside-nav clear">
                    <Search />
                </header>
                <ContactsList/>
            </aside>
        )
    }
}