// @flow

import React from 'react';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../../components/query-renderer';

const Index = () => (
  <AppQueryRenderer
    query={graphql`
      query rootQuery {
        flights(first: 2) {
          id
          location {
            lat
            lng
          }
          orientation
        }
        error
        stats {
          activePAX: activePassengers
          activeFlights
          topNationalities {
            code
            passengers
          }
          flightsTakingOffSoon
          flightsLandingSoon
          mostOccupiedFlight
        }
      }
    `}
    render={props => <pre>{JSON.stringify(props, null, 2)}</pre>}
  />
);

export default Index;
