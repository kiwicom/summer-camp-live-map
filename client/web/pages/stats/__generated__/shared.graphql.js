/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type shared$ref: FragmentReference;
export type shared = {|
  +activeFlights: ?number,
  +activePassengers: ?number,
  +topNationalities: ?$ReadOnlyArray<?{|
    +code: ?string,
    +passengers: ?number,
  |}>,
  +flightsTakingOffSoon: ?number,
  +flightsLandingSoon: ?number,
  +mostOccupiedFlight: ?string,
  +$refType: shared$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "shared",
  "type": "Stats",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "activeFlights",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "activePassengers",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "topNationalities",
      "storageKey": null,
      "args": null,
      "concreteType": "Nationality",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "code",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "passengers",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightsTakingOffSoon",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightsLandingSoon",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "mostOccupiedFlight",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c3a0b117fa681fd4937c6eff43d9057c';
module.exports = node;
