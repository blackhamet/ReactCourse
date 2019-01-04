import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';
import * as serviceWorker from './serviceWorker';*/
import registerServiceWorker from './registerServiceWorker';

let element = React.createElement('h1', { className: 'greeting' }, 'Hola, mundo!');
ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
