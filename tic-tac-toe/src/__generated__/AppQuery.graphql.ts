/**
 * @generated SignedSource<<087a3cecd446961b3f82e6f315ba8a78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly queryGameBoard: ReadonlyArray<{
    readonly board: ReadonlyArray<{
      readonly index: number;
      readonly value: string;
    }>;
    readonly player: boolean;
    readonly size: number;
    readonly used: number;
  } | null> | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
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
  "name": "used",
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
    "name": "AppQuery",
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
    "name": "AppQuery",
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
    "cacheID": "9de626f3db8d45c9937b43b1196a972d",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  queryGameBoard {\n    board(order: {asc: index}) {\n      index\n      value\n      id\n    }\n    player\n    size\n    used\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ae22545cd2b73ba36a8f21bbd5ea496";

export default node;
