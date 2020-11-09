import React, { Component } from 'react';
import List from './list';


import { Container, Row, Col } from 'react-bootstrap';


class KanbanBoard extends Component {
	render() {
		return (
				<Row>
						<List
							id="todo"
							title="To Do"
							cards={this.props.cards.filter((card) => card.status === 'todo')}
						/>
						<List
							id="in-progress"
							title="In Progress"
							cards={this.props.cards.filter((card) => card.status === 'in-progress')}
						/>
						<List
							id="done"
							title="Done"
							cards={this.props.cards.filter((card) => card.status === 'done')}
						/>
				</Row>
		);
	}
}

export default KanbanBoard;
