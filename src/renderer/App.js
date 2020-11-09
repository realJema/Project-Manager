import React from 'react';

import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import Kanban from './components/kanban';

export class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="main-container">
				<Kanban/>	
			</div>
		);
	}
}
