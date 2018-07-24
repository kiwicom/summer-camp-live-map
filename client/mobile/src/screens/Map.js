// @flow

import React from 'react';
import styled from 'styled-components';
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native';

const NavigateStatsAction = NavigationActions.navigate({
  routeName: 'Stats',
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const MapText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`;

type NavigationProps = {
  +navigation: {
    +dispatch: (action: {}) => mixed,
  },
};

export default class Map extends React.Component<{}> {
  static navigationOptions = ({ navigation }: NavigationProps) => ({
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
        <MapText>Map</MapText>
      </Container>
    );
  }
}
