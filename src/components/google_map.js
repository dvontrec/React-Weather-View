import React, { Component} from 'react';
const google = window.google;

class GoogleMap extends Component
{
	// Is called when component is rendered to the screen
	componentDidMount()
	{
		// Used to create an embeded map takes refernce to the element to embed the map to
		new google.maps.Map(this.refs.map, {
			//sets the zoom level to 12 
			zoom: 12,
			//sets the center of the map
			center: {
				//the lat is the latitude and longitude of the chosen city
				lat: this.props.lat,
				lng: this.props.lon
			} 
		});
	}

	render()
	{
		// can get a direct refrence by calling this.ref.map
		return <div ref="map" />
	}
}

export default GoogleMap;