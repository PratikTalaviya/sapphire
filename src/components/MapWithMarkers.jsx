import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import HoverUnderline from "./HoverUnderline";

const MapWithMarkers = (props) => {
  const markerRef = useRef(null);
  const svgString =
    '<svg xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#bf9960" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>';
  const locations = [
    {
      name: "Surat, Gujarat",
      lat: 21.15920015,
      lng: 72.82229625000001,
      mapLink: "https://maps.app.goo.gl/vD1G8e3TXH8ydj1r8",
    },
    {
      name: "Pune, Maharashtra",
      lat: 18.52461645,
      lng: 73.86296739999999,
      mapLink: "https://maps.app.goo.gl/XUr3Z4GNjAEvMqBk7",
    },
    {
      name: "Rajkot, Gujarat",
      lat: 22.27348695,
      lng: 70.82129635,
      mapLink: "https://maps.app.goo.gl/n52KqJwBGqtTtiTE6",
    },
  ];
  const customIcon = L.icon({
    iconUrl: `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`,
    iconSize: [25, 41],
    iconAnchor: [12, 45],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, []);

  return (
    <div style={{ height: "25rem", width: "100%", position: "relative" }}>
      <MapContainer
        center={[20.5, 72]}
        zoom={5.5}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
        zoomControl={false}
        scrollWheelZoom={false}
        touchZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]} icon={customIcon} ref={markerRef}>
            <Popup>
              <div>
                Sapphire Consultants
                <br />
                {location.name}
                <br />
                <HoverUnderline text="Get Directions" link={location.mapLink} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithMarkers;
