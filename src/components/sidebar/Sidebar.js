import React from 'react';
import {ContactsList} from "./ContactsList";
import PerfectScrollbar from 'perfect-scrollbar';


export class Sidebar extends React.Component {
    // shouldComponentUpdate() {
    //     return false;
    // }

    componentDidMount(){
        this.sidebarRef = this.refs.sidebarRef;
        const ps = new PerfectScrollbar(this.sidebarRef);
        console.log(ps);
    }

    render() {
        return (
            <aside className="sidebar" ref="sidebarRef">
                <header className="aside-nav clear">
                    <a href="#" className="aside-nav__mess" onClick={(e) => e.preventDefault()}>messages</a>
                    <a href="#" className="aside-nav__search" onClick={(e) => e.preventDefault()}>CLIENTS</a>
                </header>
                <ContactsList/>
            </aside>
        )
    }
}