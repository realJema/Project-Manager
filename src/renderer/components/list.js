import React, { Component } from 'react';
import Card from './card';
import { PlusSquare } from 'react-bootstrap-icons';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './globalState';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
		<DragDropContext>
			<Droppable droppableId={props.title} >
				{(provided, snapshot) => (
					<Col 
						xs={12} 
						sm={12} 
						md={4} 
						id={props.title}
						className="list" {...provided.droppableProps} 
						ref={provided.innerRef} >
						<Row>
							<h1 className="kanban-headers">{props.title}</h1>
							<PlusSquare
								className="ml-4 kanban-list-plus"
								onClick={(event) => handleAddCard(props.title)}
							/>
						</Row>
						{props.cards.map((card, index) => (
							<Draggable key={card.id} draggableId={card.id.toString()} index={index}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<Card
											key={card.id}
											id={card.id}
											title={card.title}
											color={card.color}
											description={card.description}
											tasks={card.tasks}
										/>
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}
					</Col>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default List;
