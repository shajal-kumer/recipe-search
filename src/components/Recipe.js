import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Recipe extends Component {
	// state = {
	// 	activeRecipe: [],
	// };

	// API_KEY = '186938cf39e74f8cc87284b71f48e1dd';
	// APP_ID = 'b07ca547';

	// async componentDidMount() {
	// 	const recipeName = this.props.location.state.recipe;
	// 	console.log(recipeName);

	// 	const api_call = await fetch(
	// 		`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?r=${recipeName}&app_id=${this.APP_ID}&app_key=${this.API_KEY}&count=5`
	// 	);
	// 	const data = await api_call.json();
	// 	// this.setState({
	// 	//     activeRecipe: data.hits,
	// 	// });
	// 	console.log(data);
	// }

	render() {
		const recipe = this.props.location.state.recipe;
		// console.log(recipe);

		return (
			<div className='container'>
				<div className='active-recipe'>
					<img
						className='active-recipe__img'
						src={recipe.image}
						alt={recipe.label}
					/>
					<h3 className='active-recipe__title'>{recipe.label}</h3>
					<h4 className='active-recipe__publisher'>
						{recipe.source}
					</h4>
					<p className='active-recipe__website'>
						Website:
						<span>
							<a href={recipe.url}>{recipe.url}</a>
						</span>
					</p>
					<button className='active-recipe__button'>
						{' '}
						<Link to='/'> Go Home</Link>
					</button>
				</div>
			</div>
		);
	}
}

export default Recipe;
