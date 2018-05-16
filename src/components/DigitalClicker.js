import React from 'react';
// Code DigitalClicker Component Here
class DigitalClicker extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			timesClicked: 0
		}
	}
	handleClicks = () =>{
		this.setState({
			timesClicked: this.state.timesClicked + 1
		})
	}

	render(){
		return(
			<button onClick={this.handleClicks}>
				{this.state.timesClicked}
			</button>
		)
	}
}

export default DigitalClicker;