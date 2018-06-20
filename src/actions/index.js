import axios from 'axios';

const API_KEY = import getKey from "../secret"
//saves the root URL with the API key
const Root_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'

//creates a fetchWeather action
export function fetchWeather(cityName)
{
	//create the URL string withthe requested city
	const url = `${Root_URL}&q=${cityName},us`;
	//creates the axios request
	const request = axios.get(url);

	//returns an action (Always must have a type)
	return {
		//sets the type as the string of FETCH_WEATHER so the variable is constant throughout the action and reducer
		type: FETCH_WEATHER,
		//passes axios promise as the payload
		payload: request
	}
}