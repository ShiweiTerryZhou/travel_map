import React, { Component } from "react";
import { Nav, Navbar, Table } from "react-bootstrap";
import FloatMenuLocationCard from "./FloatMenuLocationCard";

class FoatMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          index: 0,
          image_src: "https://via.placeholder.com/150",
          title: "dummy location 1",
          description: "fake location 1",
        },
        {
          index: 1,
          image_src: "https://via.placeholder.com/150",
          title: "dummy location 2",
          description: "fake location 2",
        },
        {
          index: 2,
          image_src: "https://via.placeholder.com/150",
          title: "dummy location 3",
          description: "fake location 3",
        },
        {
          index: 3,
          image_src: "https://via.placeholder.com/150",
          title: "dummy location 4",
          description: "fake location 4",
        },
      ],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div style={{ overflowY: "scroll", height: "93vh" }}>
        <Table bg="light" responsive>
          {this.state.locations.map((location) => (
            <FloatMenuLocationCard key={location.index} value={location} />
          ))}
        </Table>
      </div>
    );
  }
}

export default FoatMenu;
