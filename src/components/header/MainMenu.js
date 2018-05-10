import React from 'react';
import {mainMenu} from "../../data/mainMenu";

export class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: mainMenu}
    }

    render() {
        if (this.state.menu) {
            return (
                <ul className="top-menu">
                    {this.state.menu.map(function (item) {
                        return (
                            <li className="top-menu__item" key={item.id}>
                                <a href="#" className="top-menu__link"
                                   onClick={(e) => e.preventDefault()}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            )
        }
        return null;
    }
}