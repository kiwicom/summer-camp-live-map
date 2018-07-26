/**
 * @flow
 * @relayHash aee539cc3614b476f093f8e7950e1faf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FlagQueryVariables = {|
  locationId?: ?string
|};
export type FlagQueryResponse = {|
  +location: ?{|
    +name: ?string,
    +code: ?string,
    +countryFlagURL: ?string,
  |}
|};
*/


/*
query FlagQuery(
  $locationId: String
) {
  location(id: $locationId) {
    name
    code
    countryFlagURL
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "locationId",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "location",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "locationId",
        "type": "String"
      }
    ],
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
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
        "name": "countryFlagURL",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlagQuery",
  "id": null,
  "text": "query FlagQuery(\n  $locationId: String\n) {\n  location(id: $locationId) {\n    name\n    code\n    countryFlagURL\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlagQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "FlagQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa6c73efe5dd8003ba00e90c2e493b1f';
module.exports = node;
