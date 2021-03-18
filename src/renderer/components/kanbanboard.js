import React, { Component } from 'react';
import Card from './card';
import { PlusSquare } from 'react-bootstrap-icons';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './globalState';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Col, Row } from 'react-bootstrap';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',
	padding: grid * 2,
	margin: `0 0 ${grid}px 0`,

	// change background colour if dragging
	background: isDragging ? 'lightgreen' : 'grey',

	// styles we need to apply on draggables
	...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
	background: isDraggingOver ? 'lightblue' : 'lightgrey',
	padding: grid,
	width: 250,
});

// const setTodoList = useSetRecoilState(todoListState);

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

class KanbanBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.cards,
		};
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	handleAddCard(title) {
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

	onDragEnd(result) {
		console.log(this.state.items);
		const { source, destination } = result;
		// dropped outside the list
		if (!result.destination) {
			return;
		}
		
		const items = reorder(this.state.items, source.index, destination.index);
		
		console.log(items);
		this.setState({
			items,
		});
		console.log(this.state.items);
		console.log('droppableId ____________________');
		console.log('Source Id: ' + source.droppableId);
		console.log('Destination Id: ' + destination.droppableId);
		console.log('index ____________________');
		console.log('Source Id: ' + source.index);
		console.log('Destination Id: ' + destination.index);
	}

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Droppable droppableId="todo">
					{(provided, snapshot) => (
						<Col
							xs={12}
							sm={12}
							md={4}
							id="To Do"
							className="list"
							style={getListStyle(snapshot.isDraggingOver)}
							ref={provided.innerRef}
						>
							<Row>
								<h1 className="kanban-headers">{this.props.title}</h1>
								<PlusSquare
									className="ml-4 kanban-list-plus"
									onClick={(event) => handleAddCard(this.props.title)}
								/>
							</Row>

							{this.state.items
								.filter((card) => card.status === 'to-do')
								.map((card, index) => (
									<Draggable key={card.id.toString()} draggableId={card.id.toString()} index={index}>
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
				<Droppable droppableId="in-progress">
					{(provided, snapshot) => (
						<Col
							xs={12}
							sm={12}
							md={4}
							id="In Progress"
							className="list"
							style={getListStyle(snapshot.isDraggingOver)}
							ref={provided.innerRef}
						>
							<Row>
								<h1 className="kanban-headers">{this.props.title}</h1>
								<PlusSquare
									className="ml-4 kanban-list-plus"
									onClick={(event) => handleAddCard(this.props.title)}
								/>
							</Row>

							{this.state.items
								.filter((card) => card.status === 'in-progress')
								.map((card, index) => (
									<Draggable key={card.id.toString()} draggableId={card.id.toString()} index={index}>
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
				<Droppable droppableId="done">
					{(provided, snapshot) => (
						<Col
							xs={12}
							sm={12}
							md={4}
							id="Done"
							className="list"
							style={getListStyle(snapshot.isDraggingOver)}
							ref={provided.innerRef}
						>
							<Row>
								<h1 className="kanban-headers">{this.props.title}</h1>
								<PlusSquare
									className="ml-4 kanban-list-plus"
									onClick={(event) => handleAddCard(this.props.title)}
								/>
							</Row>

							{this.state.items
								.filter((card) => card.status === 'done')
								.map((card, index) => (
									<Draggable key={card.id.toString()} draggableId={card.id.toString()} index={index}>
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
}

export default KanbanBoard;
