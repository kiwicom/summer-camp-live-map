// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import type { stats } from './__generated__/shared.graphql';

export type Stats = stats;

export const createStatsContainer = (View: React.ComponentType<any>) => (
  createFragmentContainer(
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
  )
);
