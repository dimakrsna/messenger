import React from 'react';
import { store } from './../../store/reducers/rootReducer';

export class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: store.getState()
        }
    }

    logOut(e){
        e.preventDefault();
        // this.setState({currentUser: false});
        // console.log(this.state)
    }

    render() {
        let {firstName, secondName, entity, avatar} = this.state.user.currentUser.currentUser;

        return (
            <div className="user user--top">
                <div className="user__info">
                    <img src={avatar} alt="user" className="user__ava"/>
                    <p className="user__name-wrap">
                        <span className="user__name">{firstName + ' ' + secondName}</span>
                        <span className="user__company">{entity}</span>
                    </p>
                </div>
                <a href="#" className="logout" onClick={(e)=>{this.logOut(e)}}></a>
            </div>
        )
    }
}