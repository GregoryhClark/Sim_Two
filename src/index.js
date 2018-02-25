import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';//not positive i need curlys
import store from './ducks/store';
import {HashRouter} from 'react-router-dom'//not positive i need curlys

ReactDOM.render(
<HashRouter>
<Provider store = {store}>
<App />
</Provider>
</HashRouter>

, document.getElementById('root'));

