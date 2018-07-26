// @flow

import * as React from 'react';
import App from '../app';

// todo - revise flow types
type Coordinates = {|
  +lat: number,
  +lng: number,
|};

export type Flight = {|
  +id: string,
  +location: Coordinates,
  +orientation: number,
|};

type FlightsData = {|
  +flights: Flight[],
|};

type Props = {
  +data: Flight[],
};

export const FlightsContext = React.createContext();

// const FlightsWrap = ({ data, children }: Props) => <div>{children}</div>;

/*
todo - fragment?
const FlightsContainer = createFragmentContainer(
  FlightsWrap,
  graphql`
    fragment flights on RootQuery {
      flights {
        id
        location {
          lat
          lng
        }
        orientation
      }
    }
  `
);
*/

// <FlightsWrap data={flights} />

const Flights = ({ children }: { children: React.Node }) => {
  const wrapChild = children; // todo - not ideal
  return (
    <App
      render={({ flights }: { flights: Flight[] }) => (
        <FlightsContext.Provider value={flights}>
          {wrapChild}
        </FlightsContext.Provider>
      )}
    />
  );
};

export default Flights;
