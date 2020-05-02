import React, { Component } from "react";
import {
  Navbar,
  Button,
  Form,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Demo</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default TopMenu;
