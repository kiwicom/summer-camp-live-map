// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const StatsText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`;

const Stats = () => (
  <Container>
    <StatsText>Stats</StatsText>
  </Container>
);

export default Stats;
