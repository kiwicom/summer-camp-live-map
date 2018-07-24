import React, { Component } from 'react'
import { graphql } from 'react-relay'
import AppQueryRenderer from '../components/query-renderer'

// class Index extends Component {
//   static displayName = `Index`;

//   render(componentProps) {
//     return (
//       <AppQueryRenderer 
//         query={graphql`
//           query pagesQuery {
//             flights(first: 2) {
//               id
//               location {
//                 lat
//                 lng
//               }
//               orientation
//             }
//             error
//             stats {
//               ...stats
//             }
//           }
//         `}
//         render={(props) => {
//           const defaultView = <pre>{JSON.stringify(props, null, 2)}</pre>
          
//           if (!this.props.render) {
//             return defaultView

//           }

//           return componentProps.render(componentProps)
//         }}
//       />
//     )
//   }
// }

function Index(props) {
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
            ...stats
          }
        }
      `}
      render={(rendererProps) => {
        return props.render(rendererProps)
      }}
    />
  )
}

export default Index