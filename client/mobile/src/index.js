// @flow

import React from 'react';
import { Text } from 'react-native';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../../web/components/query-renderer';
import Navigation from './Navigation';

const ErrorMessage = error => <Text>{error.message}</Text>;
const BlankSlate = () => <Text>Loading...</Text>;

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
    ErrorMessage={ErrorMessage}
    BlankSlate={BlankSlate}
  />
);

export default App;
