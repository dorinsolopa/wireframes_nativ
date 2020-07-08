import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "415px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDuZKloNVBUC8QUxqpZxCbUi9eILOQeGQw"
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
