import React from "react";
import { Container, Header } from "./styled";

function Nationality({ code, passengers }) {
  return (
    <div>
      {code} : {passengers}
    </div>
  );
}

function StatsView({ data }) {
  const { flightsTakingOffSoon, flightsLandingSoon, mostOccupiedFlight } = data
  return (
    <Container>
      <Header>Top countries</Header>
      {data.topNationalities.map(nationality => (
        <Nationality {...nationality} />
      ))}
      <div>Taking off soon: {flightsTakingOffSoon}</div>
      <div>Landing soon: {flightsLandingSoon}</div>
      <div>Most occupied flight: {mostOccupiedFlight}</div>
    </Container>
  );
}

export default StatsView;
