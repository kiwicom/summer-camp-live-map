// @flow

import React from 'react';
import styled from 'styled-components';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native';
import MapView from 'shared/containers/map';
import MapComponent from '../components/Map';
import StatsButton from 'shared/components/StatsButton';
import { View, Platform } from 'react-native';

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

const Header = styled(View)`
  height: ${Platform.OS === 'ios' ? 18 : 0}px;
  background-color: white;
`;

class MapScreen extends React.Component<NavigationProps> {
  static navigationOptions() {
    return {
      header: () => <Header />,
    }
  }

  render() {
    return (
      <Container>
        <StatsButton
          title="Stats"
          onPress={() => this.props.navigation.dispatch(NavigateStatsAction)}
          />
        <MapView component={MapComponent} />
      </Container>
    );
  }
}

export default MapScreen;
