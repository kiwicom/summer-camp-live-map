import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../util/environment';

export default function AppQueryRenderer(props) {
  return (
    <QueryRenderer
      {...props}
      environment={environment}
      variables={{}}
      render={({ error, props: rendererProps }) => {
        if (error) {
          return <props.ErrorMessage error={error} />;
        }
        if (rendererProps) {
          return props.render(rendererProps);
        }
        return <props.BlankSlate />;
      }}
    />
  );
}
