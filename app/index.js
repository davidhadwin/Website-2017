import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import SVGInline from "react-svg-inline";
import App from './components/App';
// import Interests from './components/Interests';
import './scss/main.scss';


ReactDOM.render((
    	<HashRouter>    		
		    <App/>
    	</HashRouter> ),
    document.getElementById('app')
);