import React, { Component, Fragment } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '186938cf39e74f8cc87284b71f48e1dd';
const APP_ID = 'b07ca547';

class App extends Component {
	state = {
		recipes: [],
	};
	async componentDidMount() {
		const recipes = JSON.parse(localStorage.getItem('recipes'));
		if (recipes) {
			this.setState({
				recipes,
			});
		}
	}

	componentDidUpdate() {
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes);
	}

	getRecipe = async (e) => {
		e.preventDefault();
		const recipeName = e.target.elements.recipeName.value;
		const api_call = await fetch(
			`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY}`
		);
		const data = await api_call.json();
		// console.log(data);

		this.setState({
			recipes: data.hits.slice(0, 9),
		});
		// console.log(this.state.recipes);
	};
	render() {
		return (
			<Fragment>
				<Form getRecipe={this.getRecipe} />
				<Recipes recipes={this.state.recipes} />
			</Fragment>
		);
	}
}

export default App;
