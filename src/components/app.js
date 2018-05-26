import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom'

//import Header component
import { Header } from "./header/Header";

//import Sidebar component
import { Sidebar } from "./sidebar/Sidebar";

//import Messenger component
import { Messenger } from "./Messenger/Messenger";

//import LoginForm component
import { LoginForm } from "./login/login";


export class App extends React.Component {
    render(){
        if(!false){
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
            return <LoginForm />
        }

    }
}