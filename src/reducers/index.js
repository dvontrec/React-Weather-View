import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
	//sets the weather state to equal the resulting state from the Weather reducer
	weather: WeatherReducer
});

export default rootReducer;