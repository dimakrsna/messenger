import React from 'react';
import { Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import PerfectScrollbar from 'perfect-scrollbar';

//import data
import {mainData} from "./../../data/mainData";


export class Dialogue extends React.Component {
    componentDidMount(){
        new PerfectScrollbar(this.refs.dialogueRef);
    }

    render() {
        return (
            <article className="dialogue" ref="dialogueRef">
                <Switch>
                    <Route path="/" exact render={() => <MessagesStory messagesId={0}/>}/>
                    <Route path="/c001" render={() => <MessagesStory messagesId={0}/>}/>
                    <Route path="/c002" render={() => <MessagesStory messagesId={1}/>}/>
                    <Route path="/c003" render={() => <MessagesStory messagesId={2}/>}/>
                    <Route path="/c004" render={() => <MessagesStory messagesId={3}/>}/>
                    <Route path="/c005" render={() => <MessagesStory messagesId={4}/>}/>
                </Switch>
            </article>
        )
    }
}


//Component: Dialogue
class MessagesStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentContact: mainData.clients};
    }

    OutboxMsg(item) {
        return (
            <div className="message message--out" key={item.id}>
                <p className="message__txt message__txt--out">{item.text}</p>
                <span className="message__time">{item.time}</span>
            </div>
        )
    }

    InboxMsg(item) {
        return (
            <div className="message message--in" key={item.id}>
                <img src={this.state.currentContact[this.props.messagesId].avatar} alt="ava" className="message__ava"/>
                <p className="message__txt message__txt--in">{item.text}</p>
                <span className="message__time">{item.time}</span>
            </div>
        )
    }

    render() {
        let currentDialog = this.state.currentContact[this.props.messagesId || 0],
            self = this;

        return (
            <section className="dialogue__item" key={this.state.currentContact.id}>
                {/*<h2 className="dialogue__date">27 September 2017</h2*/}
                <div className="messenger__messages-wrap">
                    {currentDialog.messageHistory.map(function (item) {
                        if (item.type == "outbox") {
                            return self.OutboxMsg(item);
                        } else {
                            return self.InboxMsg(item);
                        }
                    })}
                </div>
            </section>
        )
    }
};