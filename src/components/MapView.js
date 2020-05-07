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
        sorrounding: [],
        zoom: 11,
      },
      selectedMarker: { index: -1, lat: null, lng: null },
    };
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  componentDidMount() {
    //use this to fetch sorrounding points
    let dummy_sorrounding = [
      { index: 122, lat: 32.7, lng: -117.16, title: "dummy 1" },
      { index: 124, lat: 32.7, lng: -117.26, title: "dummy 2" },
      { index: 128, lat: 32.74, lng: -117.16, title: "dummy 3" },
      { index: 121, lat: 32.74, lng: -117.26, title: "dummy 4" },
    ];
    this.setState((state) => {
      state.mapInfo.sorrounding = dummy_sorrounding;
    });
  }

  renderMarkers(map, maps) {
    let marker_list = [];
    //instantiate marker obj for the map
    for (let i = 0; i < this.state.mapInfo.sorrounding.length; i++) {
      let point = this.state.mapInfo.sorrounding[i];
      let marker = new maps.Marker({
        position: { lat: point.lat, lng: point.lng },
        map,
        title: point.title,
      });
      marker.addListener("click", () => {
        this.props.changeMenuState({
          menuState: "selected_location_card",
          selectedId: point.index,
        });
      });
      marker_list.push(marker);
    }
    return marker_list;
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
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MapView;
