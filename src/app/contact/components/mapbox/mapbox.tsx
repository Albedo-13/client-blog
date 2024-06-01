"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";
import Image from "next/image";
import { useRef, useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl, Popup } from "react-map-gl";

import pointIcon from "/public/mapbox/point-icon.svg";
import { MAPBOX_POINTS } from "@/constants/mapbox-points";

import styles from "./mapbox.module.scss";

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export function Mapbox() {
  const [selectedMarker, setSelectedMarker] = useState<(typeof MAPBOX_POINTS)[0] | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const zoomToSelectedLoc = (marker: (typeof MAPBOX_POINTS)[0]) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedMarker(marker);
    mapRef.current?.flyTo({ center: [marker.coordinates[0], marker.coordinates[1]], zoom: 10 });
  };

  const handleClosePopup = () => {
    setSelectedMarker(null);
  };

  return (
    <main className={styles.mainStyle}>
      <Map
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{ longitude: 30, latitude: 58, zoom: 4.5 }}
        maxZoom={20}
        minZoom={3}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
        {MAPBOX_POINTS.map((marker, index) => {
          return (
            <Marker key={index} longitude={marker.coordinates[0]} latitude={marker.coordinates[1]}>
              <button type="button" className={styles.button} onClick={zoomToSelectedLoc(marker)}>
                <Image src={pointIcon} alt="point icon" className={styles.image} />
              </button>
            </Marker>
          );
        })}

        {selectedMarker ? (
          <Popup
            offset={25}
            latitude={selectedMarker.coordinates[1]}
            longitude={selectedMarker.coordinates[0]}
            onClose={handleClosePopup}
            closeButton={false}
          >
            <h3 className={styles.popupTitle}>{selectedMarker.name}</h3>
            <div className={styles.popupInfo}>
              <label className={styles.popupLabel}>Address: </label>
              <span>{selectedMarker.address}</span>
            </div>
          </Popup>
        ) : null}
      </Map>
    </main>
  );
}
