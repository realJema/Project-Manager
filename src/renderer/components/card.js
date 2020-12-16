import React, { Component } from 'react';
import CheckList from './checklist';
import marked from 'marked';
import { Col, Row } from 'react-bootstrap';
import { CaretRightFill, CaretDownFill, BackspaceFill } from 'react-bootstrap-icons';

class Card extends Component {
	constructor() {
		//   ...arguments stores values of varying lengths
		super(...arguments);
		this.state = {
			showDetails: true,
		};
	}

	//   function definitions
	toggleDetails() {
		this.setState({ showDetails: !this.state.showDetails });
	}

	render() {
		let cardDetails;
		if (this.state.showDetails) {
			cardDetails = (
				<div className="card__details">
					<span contentEditable="true" dangerouslySetInnerHTML={{ __html: marked(this.props.description) }} />
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			);
		}

		// inline styling
		let sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: this.props.color,
		};
		return (
			<div className="card">
				<div style={sideColor} />
				<Row>
					{this.state.showDetails ? (
						<CaretDownFill className="ml-4 kanban-plus-btn" onClick={this.toggleDetails.bind(this)} />
					) : (
						<CaretRightFill className="ml-4 kanban-plus-btn" onClick={this.toggleDetails.bind(this)} />
					)}
					<div
						className="kanban-card-title"
						contentEditable="true"
						dangerouslySetInnerHTML={{ __html: marked(this.props.title) }}
					></div>
				</Row>
				{cardDetails}
			</div>
		);
	}
}

export default Card;
