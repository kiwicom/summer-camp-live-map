import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from '../../util/environment'

export default function AppQueryRenderer(props) {
  return (
    <QueryRenderer
      environment={environment}
      query={props.query}
      variables={{}}
      render={({error, props: rendererProps }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (rendererProps) {
          return props.render(rendererProps)
        }
        return <div>Loading...</div>
      }}
    />
  )
}
