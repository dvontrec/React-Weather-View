import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component
{
	// constructor for the SearchBar component
	constructor(props)
	{
		super(props)

		// initializes state.term to be an empty string
		this.state = { term: '' };

		//sets the value of the word (this) to be bound to this searchbar object for the function onInputChange
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
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
		this.props.fetchWeather(this.state.term)
		this.setState({ term: '' });
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

//hooks fetchWeather action to searchbar container
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);