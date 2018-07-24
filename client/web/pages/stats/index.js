import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

import StatsView from "../../components/stats-view";
import App from "../app";

const StatsContainer = createFragmentContainer(
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

function Page() {
  return (
    <App
      render={props => {
        return <StatsContainer data={props.stats} />;
      }}
    />
  );
}

export default Page;
