import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { MapStyle } from "./MapView.style";
// import Routing from './MapView-routing'

function MapView() {
  const [state, setState] = React.useState({
    lat: 45.5017,
    lng: -73.5673,
    zoom: 15,
  });
  const position = [state.lat, state.lng];
  return (
    <Map center={position} zoom={state.zoom} style={MapStyle} data-testid="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Start from here</Popup>
      </Marker>
      {/*  <Routing from={[57.74, 11.94]} to={[57.6792, 11.949]} />  */}
    </Map>
  );
}

export default MapView;
