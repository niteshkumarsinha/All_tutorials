import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button';
import RandomNumber from './RandomNumber';
import * as serviceWorker from './serviceWorker';
import RollDice from './RollDice';
import Lottery from './Lottery';
import FlipCoin from './FlipCoin';
import ColorBox from './ColorBox';
ReactDOM.render(<ColorBox />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
