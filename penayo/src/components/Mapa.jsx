"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({ iconUrl: "/marker-icon.png" });

const Mapa = ({ lat, alt }) => {
  return (
    <MapContainer
      center={[lat, alt]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[300px] md:h-[570px] w-full rounded-md shadow-md border-2 border-gray-300"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={[lat, alt]}></Marker>
    </MapContainer>
  );
};

export default Mapa;
