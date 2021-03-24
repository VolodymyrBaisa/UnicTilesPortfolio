import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
//Icon
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
//Location
const position = [41.139289, -73.2765127];
const zoom = 15;

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
    return (
        <StyledMap>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Unic Tiles. <br /> We build your dreams.
                    </Popup>
                </Marker>
            </MapContainer>
        </StyledMap>
    );
};

const StyledMap = styled(motion.div)`
    .leaflet-container {
        width: 100%;
        height: 24rem;
    }
    .leaflet-control-container {
        position: absolute;
        top: 2rem;
        right: 6rem;
    }
`;

export default Map;
