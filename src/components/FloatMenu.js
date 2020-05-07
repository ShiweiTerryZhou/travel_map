import React, { Component } from "react";
import { Nav, Navbar, Table } from "react-bootstrap";
import FloatMenuLocationCard from "./FloatMenuLocationCard";
import FloatMenuSelectedLocation from "./FloatMenuSelectedLocation";

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
      menuState: "location_cards",
      selectedId: -1,
    };
  }

  componentDidUpdate() {
    this.setState((state) => {
      state.menuState = this.props.value.menuState;
      state.selectedId = this.props.value.selectedId;
      console.log(state);
    });
  }

  render() {
    return (
      <div style={{ overflowY: "scroll", height: "93vh" }}>
        {(() => {
          switch (this.state.menuState) {
            case "location_cards":
              return (
                <Table bg="light" responsive>
                  {this.state.locations.map((location) => (
                    <FloatMenuLocationCard
                      key={location.index}
                      value={location}
                    />
                  ))}
                </Table>
              );
            case "selected_location_card":
              return (
                <FloatMenuSelectedLocation selectedId={this.state.selectedId} />
              );
            default:
              return "menu_status fked up";
          }
        })()}
      </div>
    );
  }
}

export default FoatMenu;
