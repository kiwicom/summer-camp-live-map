// @flow

import Relay, { graphql } from 'react-relay';
import React from 'react';
import styled from 'styled-components';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import App from 'shared/containers/app';
import { type Map } from './__generated__/Map.graphql';
import type { Flight } from 'shared/containers/flights';

Mapbox.setAccessToken(
  'pk.eyJ1Ijoiam9zZWR1IiwiYSI6ImNqanppbzA3aDI3MjUzd282Y2VlbGc4MjIifQ.HBadGO4LnP3CUvqz6Hs-RA'
);

const NavigateStatsAction = NavigationActions.navigate({
  routeName: 'Stats',
});

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
`;

const StyledMap = styled(Mapbox.MapView)`
  flex: 1;
`;

const styles = Mapbox.StyleSheet.create({
  icon: {
    iconImage: 'airport-15',
    iconSize: 0.75,
    iconRotate: Mapbox.StyleSheet.identity('rotation'),
    iconRotationAlignment: 'map',
    iconAllowOverlap: true,
  },
});

type NavigationProps = {
  +navigation: {
    +dispatch: (action: {}) => mixed,
  },
};

type Props = {|
  flights: Flight[];
|};
const MapComponent = (props: Props) => {
  const { flights } = props;

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
    <Container>
      <StyledMap
        styleURL="mapbox://styles/mapbox/light-v9"
        zoomLevel={4.5}
        centerCoordinate={[2.178307, 41.389526]}
      >
        <Mapbox.ShapeSource id="Flights" shape={featureCollection}>
          <Mapbox.SymbolLayer id="Plane" style={styles.icon} />
        </Mapbox.ShapeSource>
      </StyledMap>
    </Container>
  );
}

export const MapContainer = Relay.createFragmentContainer(
  MapComponent,
  graphql`
    fragment Map on RootQuery {
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

class View extends React.Component<*> {
  static navigationOptions = ({ navigation }: NavigationProps) => ({
    title: 'Map',
    headerRight: (
      <Button
        title="Stats"
        onPress={() => navigation.dispatch(NavigateStatsAction)}
      />
    ),
  });

  render() {
    return (
      <App
        render={({ flights }: Map) => (
          <MapContainer data={null} flights={flights} />
        )}
      />
    );
  }
}

export default View;
