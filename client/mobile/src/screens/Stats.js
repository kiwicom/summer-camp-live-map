// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const StatsText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`;

type Props = {};
export class Stats extends React.Component<Props> {
  render() {
    return (
      <Container>
        <StatsText>Stats</StatsText>
      </Container>
    );
  }
}
