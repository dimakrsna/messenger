import React from 'react';
import { usersData } from "../../data/usersData";
import { store } from "../../store/reducers/rootReducer";
import { userIsLogin, userNotFound } from './../../store/actions/loginCheckAction';

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usersData: usersData,
            formText: ''
        };
    }

    authenticationCheck(e){
        e.preventDefault();

        let name = this.refs.name.value,
            pass = this.refs.pass.value,
            checkLogin,
            checkPass,
            currentUser;

        checkLogin = this.state.usersData.filter(function(item){
            return item.login.search(name) !== -1;
        });

        if(checkLogin){
            checkPass = checkLogin.filter(function(item){
                return item.pass.search(pass) !== -1;
            });
        }

        if (!checkLogin.length || !checkPass.length || !name.length || !pass.length) {
            this.setState({formText: 'Неверно введенный логин или пароль'})
            store.dispatch(userNotFound);
            return false

        } if(checkLogin[0].login == name && checkPass[0].pass == pass){
            currentUser = checkPass[0];
            store.dispatch(userIsLogin(currentUser));
            this.setState({formText: ''})

        } else {
            this.setState({formText: 'Неверно введенный логин или пароль'})
            store.dispatch(userNotFound);
            return false
        }
    }

    addDefaultState(){
        store.dispatch(userNotFound);
        console.log('addDefaultState');
    }

    componentWillMount(){
        this.addDefaultState();
    }

    render(){

        return (
            <div className="login">
                <p className="login__text">Введите логин и пароль</p>
                <form action="" className="login__form">
                    <input type="text" className="login__input" placeholder="Логин" ref="name" />
                    <input type="password" className="login__input" placeholder="Пароль" ref="pass" />
                    <input type="submit" className="login__btn" placeholder="Войти" onClick={(e)=>{this.authenticationCheck(e)}}/>
                    <p className="login__help">{this.state.formText}</p>
                </form>
            </div>
        )
    }
}
