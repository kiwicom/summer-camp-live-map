// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import { Text, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import environment from '../../util/environment';

type Props<T> = {|
  +query: string,
  +variables?: ?{},
  +render: (rendererProps: T) => React.Node,
|};

type RenderProps<T> = {
  +error: {
    message: string,
  },
  props: T,
};

const SpinnerContainer = styled(View)`
  flex: 1;
  justify-content: center;
  height: 100%;
`;

export default function AppQueryRenderer<T>(props: Props<T>): React.Node {
  return (
    <QueryRenderer
      {...props}
      environment={environment}
      variables={props.variables || {}}
      render={({ error, props: rendererProps }: RenderProps<T>) => {
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
