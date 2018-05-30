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
            isLogin: this.props.currentUser || false
        }
    }

    checkStore(){
        let self = this,
            currentState = store.getState();

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

    componentWillMount(){
        this.checkStore();
    }

    shouldComponentUpdate(){
        let currentStore = store.getState();
        console.log(currentStore.currentUser);

        if(currentStore.currentUser.currentUser){
            console.log('обновили');
            return true
        } else {
            console.log('не обновили')
            return false
        }
    }

    render(){
        console.log('render');
        let currentStore = store.getState()

        if(currentStore.currentUser){
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