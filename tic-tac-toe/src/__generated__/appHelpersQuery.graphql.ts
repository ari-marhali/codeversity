/**
 * @generated SignedSource<<50cd263c96f9f90593e252226f21fd27>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type appHelpersQuery$variables = {};
export type appHelpersQuery$data = {
  readonly queryGameBoard: ReadonlyArray<{
    readonly board: ReadonlyArray<{
      readonly index: number;
      readonly value: string;
    }>;
    readonly fieldsUsed: number;
    readonly player: boolean;
    readonly size: number;
  } | null> | null;
};
export type appHelpersQuery = {
  response: appHelpersQuery$data;
  variables: appHelpersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": {
      "asc": "index"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "player",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldsUsed",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appHelpersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GameBoard",
        "kind": "LinkedField",
        "name": "queryGameBoard",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "Field",
            "kind": "LinkedField",
            "name": "board",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": "board(order:{\"asc\":\"index\"})"
          },
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "appHelpersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GameBoard",
        "kind": "LinkedField",
        "name": "queryGameBoard",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "Field",
            "kind": "LinkedField",
            "name": "board",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": "board(order:{\"asc\":\"index\"})"
          },
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96360acd696cb5a42542ce62e3f5a991",
    "id": null,
    "metadata": {},
    "name": "appHelpersQuery",
    "operationKind": "query",
    "text": "query appHelpersQuery {\n  queryGameBoard {\n    board(order: {asc: index}) {\n      index\n      value\n      id\n    }\n    player\n    size\n    fieldsUsed\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8fd2826d5d956824cc245da196128ffd";

export default node;
