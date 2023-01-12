// import React from 'react';

// import GoogleMapReact from 'google-map-react';
// import useAuth from '../hooks/useAuth';
// import "../styles/profile.css";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const GoogleMap =()=>{
  
//     const {data}= useAuth();
//     const {geo}= data.address;
   
//     const defaultProps = {
//         center: {
//           lat: 10.99835602,
//           lng: 77.01502627
//         },
//         zoom: 11
//       };
    
//   return <div className="map">
//   <GoogleMapReact
//     bootstrapURLKeys={{ key: "" }}
//     defaultCenter={defaultProps.center}
//     defaultZoom={defaultProps.zoom}
//   >
//     <AnyReactComponent
//       lat={Number(geo.lat)}
//       lng={Number(geo.lng)}
//       text="My Marker"
//     />
//   </GoogleMapReact>
// </div>
// }

// AIzaSyBFpyyS_1uLzPdsoSY2rPDT9-E8moNm3ew

// export default GoogleMap;