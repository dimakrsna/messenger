import React from 'react';
import {ContactsList} from "./ContactsList";

export class Sidebar extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <header className="aside-nav clear">
                    <a href="#" className="aside-nav__mess" onClick={(e) => e.preventDefault()}>messages</a>
                    <a href="#" className="aside-nav__search" onClick={(e) => e.preventDefault()}>CLIENTS</a>
                </header>
                <ContactsList/>
            </aside>
        )
    }
}