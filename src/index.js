import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let store = createStore((state = {
    users: []
}, action) => {
    switch (action.type) {
        case 'changeGate':
        return {
            ...state,
            users: action.users
        }
        default:
        return state
    }
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
