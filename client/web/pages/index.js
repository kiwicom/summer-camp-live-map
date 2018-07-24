import React, { Component } from 'react'
import { graphql } from 'react-relay'
import AppQueryRenderer from '../components/query-renderer'

class Index extends Component {
  static displayName = `Index`;

  render(props) {
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
              activePAX: activePassengers
              activeFlights
              topNationalities {
                code
                passengers
              }
              flightsTakingOffSoon
              flightsLandingSoon
              mostOccupiedFlight
            }
          }
        `}
        render={(props) => {
          return <pre>{JSON.stringify(props, null, 2)}</pre>
        }}
      />
    )
  }
}

export default Index
