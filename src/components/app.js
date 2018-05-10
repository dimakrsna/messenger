import React from 'react';

//import Header component
import {Header} from "./header/Header";

//import Sidebar component
import {Sidebar} from "./sidebar/Sidebar";

//import Messenger component
import {Messenger} from "./Messenger/Messenger";


export class App extends React.Component {
    render(){
        return (
            <main className="main">
                <Header />
                <Sidebar/>
                <Messenger/>
            </main>
        )
    }
}