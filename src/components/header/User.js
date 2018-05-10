import React from 'react';

export class User extends React.Component {
    render() {
        return (
            <div className="user user--top">
                <a href="" className="user__info">
                    <img src="/img/users/_ava-1.jpg" alt="user" className="user__ava"/>
                    <p className="user__name-wrap">
                        <span className="user__name">Ivan Dunskiy</span>
                        <span className="user__company">aliro</span>
                    </p>
                </a>
                <a href="" className="logout"></a>
            </div>
        )
    }
}