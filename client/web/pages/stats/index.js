// @flow

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Text } from 'react-native'; // eslint-disable-line
import App from '../app';
import { Container, Header, NationalityContainer } from './styled';

type Nationality = {|
  +code: string,
  +passengers: number,
|};

type Stats = {|
  +activeFlights: number,
  +activeFlights: number,
  +topNationalities: Nationality[],
  +flightsTakingOffSoon: number,
  +flightsLandingSoon: number,
  +mostOccupiedFlight: string,
|};

type Props = {
  +data: Stats,
};

const NationalityInfo = ({
  code,
  passengers,
}: {
  code: string,
  passengers: number,
}) => (
  <NationalityContainer>
    {code} : {passengers}
  </NationalityContainer>
);

export const StatsView = ({ data }: Props) => {
  const { flightsTakingOffSoon, flightsLandingSoon, mostOccupiedFlight } = data;
  return (
    <Container>
      <Header>Top countries</Header>
      {data.topNationalities.map(nationality => (
        <NationalityInfo key={nationality.code} {...nationality} />
      ))}
      <Text>Taking off soon: {flightsTakingOffSoon}</Text>
      <Text>Landing soon: {flightsLandingSoon}</Text>
      <Text>Most occupied flight: {mostOccupiedFlight}</Text>
    </Container>
  );
};

export const StatsContainer = createFragmentContainer(
  StatsView,
  graphql`
    fragment stats on Stats {
      activeFlights
      activePassengers
      topNationalities {
        code
        passengers
      }
      flightsTakingOffSoon
      flightsLandingSoon
      mostOccupiedFlight
    }
  `
);

const Page = () => (
  <App
    render={({ stats }: { stats: Stats }) => <StatsContainer data={stats} />}
  />
);

export default Page;
