// @flow

import React from 'react';
import styled from 'styled-components';
import { StatsContainer, StatsView } from '../../../web/pages/stats';
import App from '../../../web/pages/app';

const Stats = () => (
  <App
    render={({ stats }: { stats: Stats }) => <StatsContainer data={stats} />}
  />
);

export default Stats;
