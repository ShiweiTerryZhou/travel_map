import React, { Component } from "react";
import { Nav, Card, Button, Navbar } from "react-bootstrap";

class FloatMenuLocationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card style={{ minWidth: "10rem" }}>
          <Card.Img variant="top" src={this.props.value.image_src} />
          <Card.Body>
            <Card.Title>{this.props.value.title}</Card.Title>
            <Card.Text>{this.props.value.description}</Card.Text>
            <Button variant="primary">Location Detail</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FloatMenuLocationCard;
