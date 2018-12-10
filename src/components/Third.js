import React from 'react';

class Third extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
		console.log(this.props);
	}

	jumptofour = () => {
		console.log(this.props);
		this.props.history.push({
			pathname: '/four',
			query: {
				id: '',
				name: ''
			}
		})
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
			<div style={myStyle}>
				Third
				<div><button onClick={this.jumptofour}>To Four</button></div>			
			</div>
		);
	}
}

export default Third;