/**
 * @flow
 * @relayHash 5113b956aefc844e05dd97a64bcd4178
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pagesQueryVariables = {||};
export type pagesQueryResponse = {|
  +flights: ?$ReadOnlyArray<?{|
    +id: string,
    +location: ?{|
      +lat: ?number,
      +lng: ?number,
    |},
    +orientation: ?number,
  |}>,
  +error: ?number,
  +stats: ?{|
    +activePAX: ?number,
    +activeFlights: ?number,
    +topNationalities: ?$ReadOnlyArray<?{|
      +code: ?string,
      +passengers: ?number,
    |}>,
    +flightsTakingOffSoon: ?number,
    +flightsLandingSoon: ?number,
    +mostOccupiedFlight: ?string,
  |},
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "flights",
    "storageKey": "flights(first:2)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 2,
        "type": "Int"
      }
    ],
    "concreteType": "Flight",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": null,
        "args": null,
        "concreteType": "Coordinates",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lat",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lng",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "orientation",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "error",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stats",
    "storageKey": null,
    "args": null,
    "concreteType": "Stats",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": "activePAX",
        "name": "activePassengers",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "activeFlights",
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
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "pagesQuery",
  "id": null,
  "text": "query pagesQuery {\n  flights(first: 2) {\n    id\n    location {\n      lat\n      lng\n    }\n    orientation\n  }\n  error\n  stats {\n    activePAX: activePassengers\n    activeFlights\n    topNationalities {\n      code\n      passengers\n    }\n    flightsTakingOffSoon\n    flightsLandingSoon\n    mostOccupiedFlight\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "pagesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "pagesQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5399634091fc78daca5b090797279abc';
module.exports = node;
