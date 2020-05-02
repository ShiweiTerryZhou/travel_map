import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInfo: {
        center: {
          lat: this.props.value.lat,
          lng: this.props.value.lng,
        },
        zoom: 11,
      },
    };
  }

  componentDidMount() {
    //use this to fetch sorrounding points
  }

  render() {
    console.log(this.props.value);
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "93vh",
          width: "100%",
          padding: 0,
          margin: 0,
          float: "left",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAu9NbHrFz1kZp8s_nxGqetjLuwswlObwc" }}
          defaultCenter={this.state.mapInfo.center}
          defaultZoom={this.state.mapInfo.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MapView;
