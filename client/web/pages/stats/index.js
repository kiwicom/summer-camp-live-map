import React, { Component } from 'react'
import AppQueryRenderer from '../../components/query-renderer'
import { createFragmentContainer, graphql } from 'react-relay'

import StatsView from '../../components/stats-view'
import App from '../'

const StatsPage = createFragmentContainer(StatsView, graphql`
  fragment stats on Stats {
    activeFlights
    activePAX: activePassengers
    topNationalities {
      code
      passengers
    }
  }
`)

class Page extends Component {
  static displayName = `StatsPage`;

  render(props) {
    return (
      <App 
        render={(props) => {
          return <StatsPage data={props.stats} />
        }}
      />
    )
  }
}


export default Page