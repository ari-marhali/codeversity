/**
 * @generated SignedSource<<56bd309e05dd2bb5c2f98b9a49e23b69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppMutation$variables = {
  done: boolean;
  id: ReadonlyArray<string>;
};
export type AppMutation$data = {
  readonly updateListItem: {
    readonly listItem: ReadonlyArray<{
      readonly done: boolean;
      readonly id: string;
    } | null> | null;
  } | null;
};
export type AppMutation = {
  response: AppMutation$data;
  variables: AppMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "done"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id"
              }
            ],
            "kind": "ObjectValue",
            "name": "filter"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "done",
                "variableName": "done"
              }
            ],
            "kind": "ObjectValue",
            "name": "set"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateListItemPayload",
    "kind": "LinkedField",
    "name": "updateListItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ListItem",
        "kind": "LinkedField",
        "name": "listItem",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "done",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5b87f896005fc6d67d01c6ae89e2d5be",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $id: [ID!]!\n  $done: Boolean!\n) {\n  updateListItem(input: {filter: {id: $id}, set: {done: $done}}) {\n    listItem {\n      id\n      done\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bdc6d74e09a2cc24fd40b50b0058e1b3";

export default node;
