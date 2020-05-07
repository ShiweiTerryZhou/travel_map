import React, { Component } from "react";
import "./App.css";
import MapView from "./components/MapView";
import FloatMenu from "./components/FloatMenu";
import TopMenu from "./components/TopMenu";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_state: "MapView",
      //dummy center
      map_center: {
        lat: 32.71,
        lng: -117.16,
      },
      menu_info: { menuState: "location_cards", selectedId: -1 },
    };
    this.changeMenuState = this.changeMenuState.bind(this);
  }

  changeMenuState(new_state) {
    this.setState((state) => {
      state.menu_info = new_state;
      console.log(this.state.menu_info);
    }, this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <TopMenu />
            </Col>
          </Row>
          <Row>
            <Col xs="3" sm="3" md="3" lg="3">
              <FloatMenu value={this.state.menu_info} />
            </Col>
            <Col xs="9" sm="9" md="9" lg="9">
              {(() => {
                switch (this.state.page_state) {
                  case "MapView":
                    return (
                      <MapView
                        value={this.state.map_center}
                        changeMenuState={this.changeMenuState}
                      />
                    );
                  default:
                    return "page_status fked up";
                }
              })()}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
