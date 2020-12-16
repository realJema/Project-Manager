import React, { Component } from "react";
import Card from "./card";
import { PlusSquare } from 'react-bootstrap-icons';

import { Col, Row } from 'react-bootstrap';
class List extends Component {
	handleAddCard(title) {
		console.log('this is the type', title);
	}

	render() {
		var cards = this.props.cards.map((card) => {
			return (
				<Card
					key={card.id}
					id={card.id}
					title={card.title}
					color={card.color}
					description={card.description}
					tasks={card.tasks}
				/>
			);
		});
		return (
			<Col xs={12} sm={12} md={4} className="list">
				<Row>
					<h1>{this.props.title}</h1>
					<PlusSquare
						className="ml-4 kanban-plus-btn"
						onClick={this.handleAddCard.bind(this, this.props.title)}
					/>
				</Row>
				{cards}
			</Col>
		);
	}
}


export default List;
