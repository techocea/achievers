import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 7.23656, lng: 79.848579 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 7.23656, lng: 79.848579 }} />
      )}
    </GoogleMap>
  ))
);

export default Map;
