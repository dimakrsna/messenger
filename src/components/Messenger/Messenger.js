import React from 'react';

import {Progress} from "./Progress";
import {MessageForm} from "./MessageForm";
import {Dialogue} from "./Dialogue";

export class Messenger extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <main className="messenger">
                <Progress />
                <Dialogue />
                <MessageForm />
            </main>
        )
    }
}