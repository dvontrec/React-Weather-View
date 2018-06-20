import React, { Component } from 'react';

export default class SearchBar extends Component
{
	// constructor for the SearchBar component
	constructor(props)
	{
		super(props)

		// initializes state.term to be an empty string
		this.state = { term: '' };

		//sets the value of the word (this) to be bound to this searchbar object for the function onInputChange
		this.onInputChange = this.onInputChange.bind(this);
	}


	//function that changes the term to be equal to the user input 
	onInputChange(event)
	{
		//changes the state to equal the user input
		this.setState({ term:event.target.value });

	}

	onFormSubmit(event)
	{
		//prevents default form event from running
		event.preventDefault();
		//fetches weather data for the selected city
		console.log(process.env.API_KEY);
	}

	render()
	{
		// controlled field (the value of the input is set by the state)
		return(
			<form onSubmit={ this.onFormSubmit } className="input-group">
				<input 
				placeholder="Get a 5 day forcast for a city"
				className="form-control"
				value={ this.state.term }
				onChange={ this.onInputChange } />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}