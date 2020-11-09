import React, { Component } from "react";
import Card from "./card";

import { Col } from 'react-bootstrap';
class List extends Component {
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
			<h1>{this.props.title}</h1>
			{cards}
		</Col>
	);
  }
}


export default List;
