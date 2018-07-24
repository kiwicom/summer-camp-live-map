import React, { Component } from 'react';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../components/query-renderer';

const ErrorMessage = error => <div>{error.message}</div>;
const BlankSlate = () => <div>Loading...</div>;

class Index extends Component {
  static displayName = `Index`;

  render(props) {
    return (
      <AppQueryRenderer
        query={graphql`
          query pagesQuery {
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
        render={props => <pre>{JSON.stringify(props, null, 2)}</pre>}
        ErrorMessage={ErrorMessage}
        BlankSlate={BlankSlate}
      />
    );
  }
}

export default Index;
