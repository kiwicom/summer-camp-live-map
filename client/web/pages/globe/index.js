// @flow
import React from 'react';
import Flights, { FlightsContext } from '../../components/flights';

const Page = () => (
  <Flights>
    <FlightsContext.Consumer>
      {flights => <div>{JSON.stringify(flights)}</div>}
    </FlightsContext.Consumer>
  </Flights>
);

export default Page;
