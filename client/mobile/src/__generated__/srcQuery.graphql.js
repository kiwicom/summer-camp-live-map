/**
 * @flow
 * @relayHash 00950038202b25a368700738a31f4da3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type srcQueryVariables = {||};
export type srcQueryResponse = {|
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
  |},
|};
*/


/*
query srcQuery {
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "srcQuery",
  "id": null,
  "text": "query srcQuery {\n  flights(first: 2) {\n    id\n    location {\n      lat\n      lng\n    }\n    orientation\n  }\n  error\n  stats {\n    activePAX: activePassengers\n    activeFlights\n    topNationalities {\n      code\n      passengers\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "srcQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "srcQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '243e7b413261c5ff100f4925b0ec9357';
module.exports = node;
