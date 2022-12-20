import React from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import { Fab } from "@material-ui/core";
import { GpsFixed } from "@material-ui/icons";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import MapNavigator from "../../components/map/mapNavigator";
import useMapController from "./mapController";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxpa2tyIiwiYSI6ImNrbmVyYXIxcTJpemIzMXBoZ3JnMDZycDIifQ.5EneSaLoyECEbvPpp2XRxA";

export default function Map() {
  const [mapContainer, previous, next, centre, isFirst, isLast] =
    useMapController();

  return (
    <div>
      <div
        className='absolute inset-0 overflow-hidden'
        ref={mapContainer}
      ></div>
      <div className='absolute top-0 right-0 m-3'>
        <Fab color='primary' onClick={centre} variant='extended'>
          <GpsFixed />
          <div className='ml-3'>Centre</div>
        </Fab>
      </div>
      <div className='absolute bottom-0 w-full'>
        <MapNavigator
          onBackPress={previous}
          onForwardPress={next}
          isBackHidden={isFirst()}
          isNextHidden={isLast()}
        />
      </div>
    </div>
  );
}
