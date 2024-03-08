// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "550px",
//   height: "500px",
// };

// const center = {
//   lat: 7.23656,
//   lng: 79.848579,
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: "promptopia-398900",
//     googleMapsApiKey: "AIzaSyA_CWDygVZ4mJ-fAbvdgZcjakatLHEB-Wk",
//   });

//   const [map, setMap] = React.useState();

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback() {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyComponent);
