import React from 'react';

//import Header components
import {MainMenu} from "./MainMenu";
import {MainLogo} from "./MainLogo";
import {User} from "./User";

export class Header extends React.Component {
    render() {
        return (
            <header className="header clear">
                <button className="aside-btn" id="asideBtn"></button>
                <button className="hamb-btn" id="hambBtn"></button>
                <div className="header__logo-wrap">
                    <MainLogo/>
                </div>
                <nav className="header__menu-wrap">
                    <MainMenu/>
                </nav>
                <User/>
            </header>
        )
    }
}