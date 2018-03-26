import React, { Component } from 'react';
import './css/addItem.css';

class AddItem extends Component {
	constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.getGeoLocation = this.getGeoLocation.bind(this);
  	} 
	handleSubmit(e) {
		e.preventDefault();
		console.log('Submitted ',this.refs.newItem.value);
		this.props.onAdd(this.refs.newItem.value);
	}
	showPosition(position) {
	    console.log("Latitude: ",position.coords.latitude+
	    " Longitude: ",position.coords.longitude);
	}
	getGeoLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(this.showPosition);
	    } else { 
	        console.log("Geolocation is not supported by this browser.");
	    }		
	}
	componentWillMount() {
		console.log('ComponentWillMount is called');
	}
	componentDidMount() {
		console.log('ComponentDidMount is called');
	}
	componentWillUpdate() {
		console.log('ComponentWillUpdate is called');
	}
	componentDidUpdate() {
		console.log('ComponentDidUpdate is called');
	}
	render() {
		return (
			<div>
				<form id='add-todo' onSubmit={this.handleSubmit.bind(this)}>
					<input type='text' required ref='newItem'/>
					<input type='submit' value='Hit me!' />
				</form>
				<button onClick={this.getGeoLocation}>Get GeoLocation</button>
			</div>
		);
	}
}

export default AddItem;