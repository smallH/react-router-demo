import React from 'react';
import {Route, NavLink, Switch, HashRouter } from 'react-router-dom'
import '../style/index.css'
import First from './First'
import Second from './Second'
import Third from './Third'
import Four from './Four'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return(
			<HashRouter basename="/">
				<div>
					<div>
						<ul>
							<li><NavLink exact to="/" activeClassName="selected">First</NavLink></li>
							<li><NavLink to='/second/002' activeClassName="selected">Second</NavLink></li>
							<li><NavLink to={{
								  pathname: '/third',
								  search: '?search=userinfo',
								  state: { id: '003' }
								}} activeClassName="selected">Third</NavLink></li>
							<li><NavLink to="/four" activeClassName="selected">Four</NavLink></li>
						</ul>
					</div>
					<div>
						<Switch>
							<Route exact path="/" component={First}></Route>
							<Route path="/second/:id" component={Second}></Route>
							<Route path="/third" component={Third}></Route>
							<Route path="/four" component={Four}></Route>
						</Switch>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;