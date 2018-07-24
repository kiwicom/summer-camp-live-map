// @flow
import * as React from 'react';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../../components/query-renderer';

type Props = {
  render(props: any): React.Node,
};

const App = (props: Props) => (
  <AppQueryRenderer
    query={graphql`
      query appQuery {
        flights {
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
