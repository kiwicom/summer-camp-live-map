// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import { Text, View, ActivityIndicator } from 'react-native'; // eslint-disable-line
import styled from 'styled-components';
import environment from '../../util/environment';

type Props = {|
  +query: string,
  +variables: ?{},
  +render: (rendererProps: {}) => React.Node,
|};

type RenderProps = {
  +error: {
    message: string,
  },
  props: {},
};

const SpinnerContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export default function AppQueryRenderer(props: Props): React.Node {
  return (
    <QueryRenderer
      {...props}
      environment={environment}
      variables={props.variables || {}}
      render={({ error, props: rendererProps }: RenderProps) => {
        if (error) {
          return <Text>{error.message}</Text>;
        }
        if (rendererProps) {
          return props.render(rendererProps);
        }
        return (
          <SpinnerContainer>
            <ActivityIndicator size="small" animating />
          </SpinnerContainer>
        );
      }}
    />
  );
}
