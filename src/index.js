import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Groceries } from "./components/Groceries";
import Button from "./components/Button";

const groceries = [
    'milk',
    'cheese',
    'bread',
    'meat'
];

ReactDOM.render(
  React.createElement(Groceries, { list: groceries }, []),
  document.getElementById('root')
);
registerServiceWorker();
