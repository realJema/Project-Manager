import React, { Component } from "react";
import CheckList from "./Components/checklist";
import marked from "marked";

export class App extends React.PureComponent {
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
				<h1>Hello </h1>
			</div>
		);
	}
};
