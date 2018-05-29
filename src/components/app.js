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
        this.state = {
            isLogin: this.props.currentUser
        }
    }

    checkStore(){
        let self = this,
            currentState = store.getState();

        console.log(self.state);
        console.log(currentState.currentUser);

        store.subscribe(function(){

            if (currentState.currentUser){
                if(currentState.currentUser.currentUser){
                    self.setState({isLogin: currentState.currentUser});
                }
            } else {
                self.setState({isLogin: false});
            }

        });
    }

    render(){
        this.checkStore();

        if(this.state.isLogin){
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