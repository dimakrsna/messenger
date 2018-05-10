import React from 'react';

export class MessageForm extends React.Component {
    render(){
        return (
            <form className="enter-mess clear" action="">
                <span className="enter-mess__placeholer" id="placeholer">Type messege here</span>
                <textarea id="messText" className="enter-mess__text"></textarea>
                <div className="enter-mess__btn-wrap">
                    <label htmlFor="uploadFile" className="enter-mess__upload"></label>
                    <input type="file" id="uploadFile" />
                    <button className="enter-mess__btn">SEND</button>
                </div>
            </form>
        )
    }
}