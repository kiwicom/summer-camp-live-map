// @flow

import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components';
import idx from 'idx';
import type { Stats } from '../../../../web/pages/stats/shared';
import { InfoItem } from '../../../../web/pages/stats/shared';
import {
  ActivePlanes,
  PlaneLanding,
  PlaneTakingOff
} from '../../../../web/pages/stats/shared';
const plane = require('../../../../web/pages/stats/styled/plane.png');

export const SectionTitle = styled(Text)`
  padding: 10px;
  font-size: 20px;
  color: #777;
`;

const InfoItemWrapper = styled(View)`
  padding: 10px;
`;

const InfoSectionContainer = styled(View)`
  margin-top: 5px;
`;

export const InfoSection = (props: { data: ?Stats }) => {
  const flightsTakingOffSoon = idx(props.data, _ =>_.flightsTakingOffSoon) || 0;
  const flightsLandingSoon = idx(props.data, _ =>_.flightsLandingSoon) || 0;
  const activeFlights = idx(props.data, _ =>_.activeFlights) || 0;

  return (
    <InfoSectionContainer>
      <SectionTitle>
        More details
      </SectionTitle>

      <InfoItemWrapper>
        <InfoItem
          title="Taking off"
          value={flightsTakingOffSoon}
          Icon={<PlaneLanding source={plane} />}
        />
      </InfoItemWrapper>
      <InfoItemWrapper>
        <InfoItem
          title="Active"
          value={activeFlights}
          Icon={<ActivePlanes source={plane} />}
        />
      </InfoItemWrapper>
      <InfoItemWrapper>
        <InfoItem
          title="Landing"
          value={flightsLandingSoon}
          Icon={<PlaneTakingOff source={plane} />}
        />
      </InfoItemWrapper>
    </InfoSectionContainer>
  );
}

export const ScreenContainer = styled(ScrollView)`
  padding: 10px;
`;
