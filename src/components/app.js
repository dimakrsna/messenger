import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { HashRouter } from 'react-router-dom'

//import Header component
import {Header} from "./header/Header";

//import Sidebar component
import {Sidebar} from "./sidebar/Sidebar";

//import Messenger component
import {Messenger} from "./Messenger/Messenger";


export class App extends React.Component {

    render(){
        return (
            <HashRouter history={Router.history}>
                <div className="content-wrap">
                    <Header/>
                    <Sidebar/>
                    <Messenger/>
                </div>
            </HashRouter>
        )
    }
}