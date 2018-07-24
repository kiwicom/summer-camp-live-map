// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import { Text } from 'react-native'; // eslint-disable-line
import environment from '../../util/environment';

type Props = {|
  +query: string,
  +render: (rendererProps: {}) => React.Node
|};

type RenderProps = {
  +error: {
    message: string
  },
  props: {}
};

export default function AppQueryRenderer(props: Props): React.Node {
  return (
    <QueryRenderer
      {...props}
      environment={environment}
      variables={{}}
      render={({ error, props: rendererProps }: RenderProps) => {
        if (error) {
          return <Text>{error.message}</Text>;
        }
        if (rendererProps) {
          return props.render(rendererProps);
        }
        return <Text>Loading...</Text>;
      }}
    />
  );
}
