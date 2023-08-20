/**
 * @generated SignedSource<<ebdbb094ba324f2042fd61db832b77c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly getGameBoard: {
    readonly board: ReadonlyArray<{
      readonly index: number;
      readonly value: string;
    }>;
    readonly player: boolean;
    readonly size: number;
    readonly used: number;
  } | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "0x1a4fdbe950"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": {
      "asc": "index"
    }
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "player",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "used",
  "storageKey": null
},
v7 = {
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
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "GameBoard",
        "kind": "LinkedField",
        "name": "getGameBoard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Field",
            "kind": "LinkedField",
            "name": "board",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": "board(order:{\"asc\":\"index\"})"
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "getGameBoard(id:\"0x1a4fdbe950\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "GameBoard",
        "kind": "LinkedField",
        "name": "getGameBoard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Field",
            "kind": "LinkedField",
            "name": "board",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": "board(order:{\"asc\":\"index\"})"
          },
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": "getGameBoard(id:\"0x1a4fdbe950\")"
      }
    ]
  },
  "params": {
    "cacheID": "5f08f4c50ed9d272ac0c75b652d378b2",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  getGameBoard(id: \"0x1a4fdbe950\") {\n    board(order: {asc: index}) {\n      index\n      value\n      id\n    }\n    player\n    size\n    used\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d0b73d1e12239740f25b45b673fd682";

export default node;
