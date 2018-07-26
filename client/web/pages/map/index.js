// @flow

import React, { Component } from 'react';
import Head from 'next/head';
import Flights, { FlightsContext } from 'shared/containers/flights';
import { Map } from './styled';
import type { Flight } from 'shared/containers/flights';
import type { Map as MapType } from 'mapbox-gl';

// todo - store token in some shared 'constants' class
const TOKEN =
  'pk.eyJ1Ijoiam9zZWR1IiwiYSI6ImNqanppbzA3aDI3MjUzd282Y2VlbGc4MjIifQ.HBadGO4LnP3CUvqz6Hs-RA';

// todo - revise flow
type Props = {
  +data: Flight[],
};

class MapView extends Component<Props> {
  mapRef = React.createRef();
  map: MapType;

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { data } = this.props;
    const flights = data.map(flight => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [flight.location.lat, flight.location.lng],
      },
      properties: {
        rotation: flight.orientation,
      },
    }));

    import('mapbox-gl').then(mapboxgl => {
      const mapbox = Object.assign(mapboxgl, {
        accessToken: TOKEN,
      });
      this.map = new mapbox.Map({
        container: this.mapRef.current,
        style: 'mapbox://styles/mapbox/light-v9',
        center: [2.178307, 41.389526],
        zoom: 4.5,
      });

      this.map.on('load', () => {
        this.map.addLayer({
          id: 'points',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: flights,
            },
          },
          layout: {
            'icon-image': 'airport-15',
            'icon-rotate': ['get', 'rotation'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
          },
        });
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Live Map</title>
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <Map innerRef={this.mapRef} />
      </React.Fragment>
    );
  }
}

const Page = () => (
  <Flights>
    <FlightsContext.Consumer>
      {flights => <MapView data={flights || []} />}
    </FlightsContext.Consumer>
  </Flights>
);

export default Page;
