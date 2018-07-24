// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../util/environment';

type Props = {|
  +query: string,
  +render: (rendererProps: {}) => React.Node,
|};

export default function AppQueryRenderer({ query, render }: Props) {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={({ error, props: rendererProps }) => {
        if (error) {
          return <div>{error.message}</div>;
        }
        if (rendererProps) {
          return render(rendererProps);
        }
        return <div>Loading...</div>;
      }}
    />
  );
}
