import React from 'react';
import { store } from './../../store/reducers/rootReducer';
import { connect, Provider } from 'react-redux';

//import Header components
import {MainMenu} from "./MainMenu";
import {MainLogo} from "./MainLogo";
import {User} from "./User";


const mapStateToProps = (state) => {
    return {
        currentUser: state.payload
    }
};
const WrappedUser = connect(mapStateToProps)(User);


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
                <Provider store={store}>
                    <WrappedUser />
                </Provider>
            </header>
        )
    }
}