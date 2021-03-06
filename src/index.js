import React from 'react';
import {render} from "react-dom";
import {createStore} from "redux";
import App from './App';
import rootReducer from "./reducers/";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

serviceWorker.unregister();