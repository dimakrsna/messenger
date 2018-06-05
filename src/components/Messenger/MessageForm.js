import React from 'react';
import $ from 'jquery';
import { store } from './../../store/reducers/rootReducer';

export class MessageForm extends React.Component {
    addNewMessage(e){
        e.preventDefault();

        let $textarea = $(this.refs.textareaRef),
            textareaValue = $textarea.val();

        console.log(textareaValue, store.getState());
    }

    render(){
        return (
            <form className="enter-mess clear" action="" onSubmit={(e) => {this.addNewMessage(e)}}>
                <span className="enter-mess__placeholer" id="placeholer">Type messege here</span>
                <textarea ref="textareaRef" id="messText" className="enter-mess__text"></textarea>
                <div className="enter-mess__btn-wrap">
                    <label htmlFor="uploadFile" className="enter-mess__upload"></label>
                    <input type="file" id="uploadFile" />
                    <button className="enter-mess__btn">SEND</button>
                </div>
            </form>
        )
    }
}