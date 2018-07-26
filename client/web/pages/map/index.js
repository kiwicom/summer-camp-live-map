// @flow

import React from 'react';
import Head from 'next/head';
import './styled';
import MapView from 'shared/containers/map';
import MapComponent from './Map';

const Map = () => (
  <React.Fragment>
    <Head>
      <title>Live Map</title>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </Head>
    <MapView component={MapComponent} />
  </React.Fragment>
);

export default Map;
