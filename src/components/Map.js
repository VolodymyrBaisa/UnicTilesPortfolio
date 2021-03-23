import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const location = {
    lat: 41.139289,
    lng: -73.2765127,
};

const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: location.lat, lng: location.lng }}
    >
        {props.isMarkerShown && (
            <Marker position={{ lat: location.lat, lng: location.lng }} />
        )}
    </GoogleMap>
));

export default Map;
