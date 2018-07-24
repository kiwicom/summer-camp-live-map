/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type stats$ref: FragmentReference;
export type stats = {|
  +activeFlights: ?number,
  +activePAX: ?number,
  +topNationalities: ?$ReadOnlyArray<?{|
    +code: ?string,
    +passengers: ?number,
  |}>,
  +$refType: stats$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "stats",
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
      "alias": "activePAX",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3d30712d9c0c6a8a4844eb597b9f0245';
module.exports = node;
