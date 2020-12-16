import React, { Component } from 'react';
import Card from './card';
import { PlusSquare } from 'react-bootstrap-icons';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './globalState';

import { Col, Row } from 'react-bootstrap';

function List(props) {
	const setTodoList = useSetRecoilState(todoListState);

	function handleAddCard(title) {
		console.log(title.replace(/\s+/g, '-').toLowerCase());
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: oldTodoList.length + 1,
				title: 'Enter New Task',
				color: '',
				description: '',
				status: title.replace(/\s+/g, '-').toLowerCase(),
				tasks: [],
			},
		]);
	}

	return (
		<Col xs={12} sm={12} md={4} className="list">
			<Row >
				<h1 class="kanban-headers">{props.title}</h1>
				<PlusSquare className="ml-4 kanban-list-plus" onClick={(event) => handleAddCard(props.title)} />
			</Row>
			{props.cards.map((card) => (
				<Card
					key={card.id}
					id={card.id}
					title={card.title}
					color={card.color}
					description={card.description}
					tasks={card.tasks}
				/>
			))}
		</Col>
	);
}

export default List;
