import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { store } from './../store/reducers/rootReducer';

import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Messenger } from "./Messenger/Messenger";
import { LoginForm } from "./login/login";

const mapStateToProps = (state) => {
    return {
        currentUser: state.payload
    }
};

const WrappedLoginForm = connect(mapStateToProps)(LoginForm);

export class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(false){
            return (
                <HashRouter history={Router.history}>
                    <div className="content-wrap">
                        <Header/>
                        <Sidebar/>
                        <Messenger/>
                    </div>
                </HashRouter>
            )
        } else {
            return (
                <Provider store={store}>
                    <WrappedLoginForm />
                </Provider>
            )
        }

    }
}