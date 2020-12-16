import React, { Component } from 'react';
import List from './list';

import { Row } from 'react-bootstrap';

function KanbanBoard(props) {
		return (
			<Row>
				<List id="todo" title="To Do" cards={props.cards.filter((card) => card.status === 'to-do')} />
				<List
					id="in-progress"
					title="In Progress"
					cards={props.cards.filter((card) => card.status === 'in-progress')}
				/>
				<List id="done" title="Done" cards={props.cards.filter((card) => card.status === 'done')} />
			</Row>
		);
}

export default KanbanBoard;
