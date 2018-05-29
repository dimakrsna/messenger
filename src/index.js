import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app";
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './css/style.css';

import { connect, Provider } from 'react-redux';
import { store } from './store/reducers/rootReducer';

const mapStateToProps = (state) => {
    return {
        currentUser: state.payload
    }
};

const WrappedApp = connect(mapStateToProps)(App);

ReactDOM.render(<Provider store={store}>
    <WrappedApp />
</Provider>, document.getElementById("root"));

