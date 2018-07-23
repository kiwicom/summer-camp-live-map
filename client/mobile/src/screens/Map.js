// @flow

import React from 'react';
import styled from 'styled-components';
import {NavigationActions, NavigationNavigatorProps} from 'react-navigation';
import {Button} from 'react-native';

const NavigateStatsAction = NavigationActions.navigate({
  routeName: 'Stats'
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const MapText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`;

type MapSceneProps = NavigationNavigatorProps;
export class Map extends React.Component<MapSceneProps> {
  static navigationOptions = (props: MapSceneProps) => ({
    headerRight: (
      <Button
        title="Stats"
        onPress={() => props.navigation.dispatch(NavigateStatsAction)}
      />
    )
  });

  render() {
    return (
      <Container>
        <MapText>Map</MapText>
      </Container>
    );
  }
}
