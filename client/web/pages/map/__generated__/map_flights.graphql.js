/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type map_flights$ref: FragmentReference;
export type map_flights = {|
  +flights: ?$ReadOnlyArray<?{|
    +id: string,
    +location: ?{|
      +lat: ?number,
      +lng: ?number,
    |},
    +orientation: ?number,
  |}>,
  +$refType: map_flights$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "map_flights",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "flights",
      "storageKey": null,
      "args": null,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b54caa5fb847ccf9ad9c2138778f60bd';
module.exports = node;
