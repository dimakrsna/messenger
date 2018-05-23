import React from 'react';
import { usersData } from './../../data/usersData';

export class User extends React.Component {
    render() {
        return (
            <div className="user user--top">
                <div className="user__info">
                    <img src="/img/users/ava-02.jpg" alt="user" className="user__ava"/>
                    <p className="user__name-wrap">
                        <span className="user__name">{usersData[0].firstName} {usersData[0].secondName}</span>
                        <span className="user__company">{usersData[0].entity}</span>
                    </p>
                </div>
                <a href="" className="logout"></a>
            </div>
        )
    }
}