import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';
import Navbar from './Navbar';

const Router = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navbar />
				<Switch>
					<Route path='/recipe/:id' component={Recipe} />
					<Route exact path='/' component={App} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default Router;
