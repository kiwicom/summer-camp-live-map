// @flow

import React from 'react';
import styled from 'styled-components';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native';
import MapView from 'shared/containers/map';
import MapComponent from '../components/Map';

const NavigateStatsAction = NavigationActions.navigate({
  routeName: 'Stats',
});

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
`;

type NavigationProps = {
  +navigation: {
    +dispatch: (action: {}) => mixed,
  },
};

class MapScreen extends React.Component<*> {
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
      <Container>
        <MapView component={MapComponent} />
      </Container>
    );
  }
}

export default MapScreen;
