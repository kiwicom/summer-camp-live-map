// @flow

import * as React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native'; // eslint-disable-line
import type { Stats } from '../shared';
import { Row, Col } from 'antd';
import idx from 'idx';
import InfoItem, {
  ActivePlanes,
  PlaneTakingOff,
  PlaneLanding
} from './InfoItem';
const plane = require('./plane.png');

export { default as Nationalities } from './Nationalities';

export const InfoRow = (props: { data: ?Stats }) => {
  const flightsTakingOffSoon = idx(props.data, _ =>_.flightsTakingOffSoon) || 0;
  const flightsLandingSoon = idx(props.data, _ =>_.flightsLandingSoon) || 0;
  const activeFlights = idx(props.data, _ =>_.activeFlights) || 0;

  return (
    <Row>
      <Col md={8}>
        <InfoItem
          title="Taking off"
          value={flightsTakingOffSoon}
          Icon={<PlaneTakingOff source={plane} />}
        />
      </Col>
      <Col md={8}>
        <InfoItem
          title="Active"
          value={activeFlights}
          Icon={<ActivePlanes source={plane} />}
        />
      </Col>
      <Col md={8}>
        <InfoItem
          title="Landing"
          value={flightsLandingSoon}
          Icon={<PlaneLanding source={plane} />}
        />
      </Col>
    </Row>
  );
};

export const Container = styled(View)``;

export const NationalityContainer = styled(Text)`
  text-align: center;
`;

export const Header = styled(Text)`
  text-align: center;
  font-size: 24px;
`;

export const PageWrapper = styled(View)`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;
