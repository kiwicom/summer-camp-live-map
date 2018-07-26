// @flow
import React from 'react';
import App from '../../pages/app';

// todo - revise flow types
type Coordinates = {|
  +lat: number,
  +lng: number,
|};

type Flight = {|
  +id: string,
  +location: Coordinates,
  +orientation: number,
|};

type FlightsData = {|
  +flights: Flight[],
|};

type Props = {
  +data: FlightsArray,
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

const Flights = ({ children }) => {
  const wrapChild = children; // todo - not ideal
  return (
    <App
      render={({ flights }: { flights: FlightsData }) => (
        <FlightsContext.Provider value={flights}>
          {wrapChild}
        </FlightsContext.Provider>
      )}
    />
  );
};

export default Flights;
