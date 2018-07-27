// @flow

import * as React from 'react';
import Flights, { FlightsContext } from '../flights';

type Props = {|
  +flights: any[],
  +component: React.ComponentType<any>,
|};

const MapComponent = (props: Props) => {
  const { flights, component: Component } = props;

  const featureCollection = {
    type: 'FeatureCollection',
    features: flights.map(flight => ({
      id: flight.id,
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [flight.location.lat, flight.location.lng],
      },
      properties: {
        rotation: flight.orientation,
      },
    })),
  };

  return (
    <Component
      featureCollection={featureCollection}
      styleURL="mapbox://styles/mapbox/light-v9"
      zoomLevel={4.5}
      centerCoordinate={[2.178307, 41.389526]}
      icon="airport-15"
      token="pk.eyJ1Ijoiam9zZWR1IiwiYSI6ImNqanppbzA3aDI3MjUzd282Y2VlbGc4MjIifQ.HBadGO4LnP3CUvqz6Hs-RA"
    />
  );
};

const MapView = ({ component }: { component: React.ComponentType<any> }) => (
  <Flights>
    <FlightsContext.Consumer>
      {flights =>
        <MapComponent flights={flights || []} component={component} />
      }
    </FlightsContext.Consumer>
  </Flights>
);

export default MapView;
