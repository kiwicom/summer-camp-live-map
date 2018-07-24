import React from 'react';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../../components/query-renderer';

type Props = {
  render(props: mixed): mixed,
};

const App = (props: Props) => (
  <AppQueryRenderer
    query={graphql`
      query appQuery {
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
          ...stats
        }
      }
    `}
    render={rendererProps => props.render(rendererProps)}
  />
);

export default App;
