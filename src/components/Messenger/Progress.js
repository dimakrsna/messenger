import React from 'react';

export class Progress extends React.Component {
    render() {
        return (
            <header className="messenger__header">
                <div className="progress">
                    <span className="progress__date">28 January 2017</span>
                    <div className="status">
                        <span className="status__item status__item&#45;&#45;done">1<i>. New</i></span>
                        <span className="status__item status__item&#45;&#45;done">2<i>. In Progress</i></span>
                        <span className="status__item status__item&#45;&#45;not-done">3<i>. Signed</i></span>
                        <span className="status__item status__item&#45;&#45;not-done">4<i>. Closed</i></span>
                    </div>
                </div>
            </header>
        )
    }
}