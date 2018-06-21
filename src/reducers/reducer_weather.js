import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action)
{
	switch(action.type){
		//if the action is the fetch weather action
		case FETCH_WEATHER:

			// returns a new array that includes the new city aliong with theprevious state
			return [action.payload.data, ...state];
	}
	return state;
}