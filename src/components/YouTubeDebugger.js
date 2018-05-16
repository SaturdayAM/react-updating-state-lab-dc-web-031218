import React from 'react';
// Code YouTubeDebugger Component Here
class YouTubeDebugger extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {resolution: '1080p'}
			}
		}
	}

	changeBitrate = () =>{
		this.setState({
			settings:{
				...this.state.settings,
				bitrate: 12
			}
		});
	}


	changeResolution = () =>{
		// this.setState({
		// 	settings:{
		// 		...this.state.settings,
		// 		video:{
		// 			resolution: '720p'
		// 		}
		// 	}
		// })
		this.setState({
			settings: Object.assign({},
					   this.state.settings,
					   {
					   		video: Object.assign({},
					   			   this.state.settings.video,
					   			   {resolution: '720p'})
					   })
		});
	}
	render(){
		return(
			<div>
				<h2>YouTubeDebugger</h2>
				<ul>
					<li>Bitrate: {this.state.settings.bitrate}</li>
					<li>resolution: {this.state.settings.video.resolution}</li>
				</ul>
				<button className="bitrate" onClick={this.changeBitrate}>
					Change Bitrate
				</button>
				<button className="resolution" onClick={this.changeResolution}>
					Change Resolution
				</button>
			</div>
		)
	}
}

export default YouTubeDebugger;