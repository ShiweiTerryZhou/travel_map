import React, { Component } from "react";
class FloatMenuSelectedLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return <div>"selected" {this.props.selectedId}</div>;
  }
}

export default FloatMenuSelectedLocation;
