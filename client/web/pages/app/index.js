import React from "react";
import { graphql } from "react-relay";
import AppQueryRenderer from "../../components/query-renderer";

function App(props) {
  return (
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
      render={rendererProps => {
        return props.render(rendererProps);
      }}
    />
  );
}

export default App;
