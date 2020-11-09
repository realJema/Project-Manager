import React from 'react';

import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Draggable from 'react-draggable';

export class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
		};

	render() {
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		);
	}
}

