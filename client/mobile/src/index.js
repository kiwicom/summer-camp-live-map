// @flow

import React from 'react';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../../web/components/query-renderer';
import Navigation from './Navigation';

const App = () => (
  <AppQueryRenderer
    query={graphql`
      query srcQuery {
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
        }
      }
    `}
    render={props => console.log(props) || <Navigation {...props} />}
  />
);

export default App;
