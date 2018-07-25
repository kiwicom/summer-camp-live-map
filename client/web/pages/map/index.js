// @flow

import Relay, { graphql } from 'react-relay';
import React, { Component } from 'react';
import Head from 'next/head';
import App from '../app';
import { Container, Map } from './styled';

// todo - store token in some shared 'constants' class
const TOKEN =
  'pk.eyJ1Ijoiam9zZWR1IiwiYSI6ImNqanppbzA3aDI3MjUzd282Y2VlbGc4MjIifQ.HBadGO4LnP3CUvqz6Hs-RA';

/*
todo - complete flown implementation (after fragment separation)

type Coordinates = {|
  +lat: number,
  +lng: number,
|};

type Flight = {|
  +id: string,
  +location: Coordinates,
  +orientation: number,
|};

type Props = {
  +data: Flight[],
};
*/

class MapView extends Component {
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
        this.map.loadImage('/static/img/plane.png', (error, image) => {
          if (error) throw error;
          this.map.addImage('plane', image);
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
              'icon-image': 'plane',
              'icon-size': 0.5,
              'icon-rotate': ['get', 'rotation'],
              'icon-rotation-alignment': 'map',
              'icon-allow-overlap': true,
            },
          });
        });
      });
    });
  }

  // todo - probably remove Container wrap
  render() {
    return (
      <div>
        <Head>
          <title>Live Map</title>
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <div
            ref={this.mapRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </Container>
      </div>
    );
  }
}

const MapContainer = Relay.createFragmentContainer(
  MapView,
  graphql`
    fragment map_flights on RootQuery {
      flights {
        id
        location {
          lat
          lng
        }
        orientation
      }
    }
  `
);

const Page = () => (
  <App
    render={({ flights }: { flights: Flights }) => (
      <MapContainer data={flights} />
    )}
  />
);

export default Page;
