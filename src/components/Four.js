import React from 'react';

class Four extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		console.log(this.props);
	}

	render() {
		let myStyle = {
			fontSize: 50,
			color: '#FF0000',
			border: 'solid 1px gray',
			width: '500px',
			height: '200px',
			textAlign: 'center',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: '20px'
		}
		return(
			<div style={myStyle}>Four</div>
		);
	}
}

export default Four;