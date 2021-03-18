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
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});


// const setTodoList = useSetRecoilState(todoListState);

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.cards
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
	};

	onDragEnd(result) {
			
        const { source, destination } = result;
		 // dropped outside the list
		if (!result.destination) {
			return;
		}
		
		const items = reorder(
			this.state.items,
			result.source.index,
			result.destination.index
		);

		this.setState({
			items
		});
		console.log("after ____________________");
		console.log("Source Id " + source.droppableId + "/nDestination Id" + destination.droppableId);
	}

	render() {
		
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Col
					xs={12} 
					sm={12} 
					md={4} 
					id={this.props.title}
					className="list" >
					<Row>
						<h1 className="kanban-headers">{this.props.title}</h1>
						<PlusSquare
							className="ml-4 kanban-list-plus"
							onClick={(event) => handleAddCard(this.props.title)}
						/>
					</Row>

				<Droppable droppableId={this.props.title} >
					{(provided, snapshot) => (
						<div 
							style={getListStyle(snapshot.isDraggingOver)}
							ref={provided.innerRef} >
								
								{this.state.items.map((card, index) => (
									<Draggable 
										key={card.id.toString()}  
										draggableId={card.id.toString()} 
										index={index}
									>
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
								</div>
					)}
				</Droppable>
						</Col>
			</DragDropContext>
		);
	}
}

export default List;
