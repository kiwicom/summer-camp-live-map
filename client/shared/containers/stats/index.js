// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import type { RelayContainer } from 'react-relay';
import type { stats } from './__generated__/stats.graphql';

export type Stats = stats;

export function <T>createStatsContainer(
  View: React.ComponentType<T>
): RelayContainer<T> {
  return createFragmentContainer(
    View,
    graphql`
    fragment stats on Stats {
      activeFlights
      activePassengers
      topNationalities {
        code
        passengers
      }
      flightsTakingOffSoon
      flightsLandingSoon
      mostOccupiedFlight
    }
    `
  );
}
