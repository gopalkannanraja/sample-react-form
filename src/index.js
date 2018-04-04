import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import App from './containers';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
