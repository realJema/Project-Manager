import React from 'react';
import AnalogClock from 'analog-clock-react';

import './assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Draggable from 'react-draggable';

export class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			bg: 'bg',
			cb: 'containerbg',
		};
	}

	handleChange(event) {
		let value = event.target.value;
		console.log(value);
		this.setState({
			bg: event.target.value,
		});
	}
	closeWindow() {
		const remote = window.require ? window.require('electron').remote : null;
		const WIN = remote.getCurrentWindow();
		WIN.close();
	}

	render() {
		let options = {
			width: '300px',
			border: true,
			borderColor: '##fff0',
			baseColor: '##fff0',
			centerColor: '#d81c7a',
			centerBorderColor: '#fff',
			handColors: {
				second: '#d81c7a',
				minute: '#d81c7a',
				hour: '#d81c7a',
			},
		};
		return (
			<Container style={{ backgroundImage: 'url(./assets/images/' + this.state.cb + '.png)' }}>
				<Row>
					<Col>
						<Draggable>
							<div
								className="theClock"
								style={{ backgroundImage: 'url(./assets/images/' + this.state.bg + '.png)' }}
							>
								<AnalogClock {...options} />
							</div>
						</Draggable>
					</Col>
					<Col className="controls">
							<h5>Controls</h5>
							<button onClick={this.closeWindow}>Close</button>
							<select onChange={this.handleChange.bind(this)}>
								<option value="bg">Clock 1</option>
								<option value="bg2">Clock 2</option>
								<option value="bg3">Clock 3</option>
								<option value="bg4">Clock 4</option>
								<option value="bg5">Clock 5</option>
							</select>
					</Col>
				</Row>
			</Container>
		);
	}
}

