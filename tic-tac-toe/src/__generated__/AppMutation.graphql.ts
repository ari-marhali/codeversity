/**
 * @generated SignedSource<<ba01199da66c8ecb0a132865fb11a750>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FieldRef = {
  id?: string | null;
  index?: number | null;
  value?: string | null;
};
export type AppMutation$variables = {
  board: ReadonlyArray<FieldRef>;
  player: boolean;
  size: number;
  used: number;
};
export type AppMutation$data = {
  readonly addGameBoard: {
    readonly gameBoard: ReadonlyArray<{
      readonly board: ReadonlyArray<{
        readonly index: number;
        readonly value: string;
      }>;
      readonly player: boolean;
      readonly size: number;
      readonly used: number;
    } | null> | null;
  } | null;
  readonly deleteField: {
    readonly msg: string | null;
  } | null;
  readonly deleteGameBoard: {
    readonly msg: string | null;
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
  "name": "board"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "player"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "size"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "used"
},
v4 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {}
  }
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "msg",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": (v4/*: any*/),
  "concreteType": "DeleteFieldPayload",
  "kind": "LinkedField",
  "name": "deleteField",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "deleteField(filter:{})"
},
v7 = {
  "alias": null,
  "args": (v4/*: any*/),
  "concreteType": "DeleteGameBoardPayload",
  "kind": "LinkedField",
  "name": "deleteGameBoard",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "deleteGameBoard(filter:{})"
},
v8 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "board",
        "variableName": "board"
      },
      {
        "kind": "Variable",
        "name": "player",
        "variableName": "player"
      },
      {
        "kind": "Variable",
        "name": "size",
        "variableName": "size"
      },
      {
        "kind": "Variable",
        "name": "used",
        "variableName": "used"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "player",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "used",
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": {
      "asc": "index"
    }
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMutation",
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": (v8/*: any*/),
        "concreteType": "AddGameBoardPayload",
        "kind": "LinkedField",
        "name": "addGameBoard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GameBoard",
            "kind": "LinkedField",
            "name": "gameBoard",
            "plural": true,
            "selections": [
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "Field",
                "kind": "LinkedField",
                "name": "board",
                "plural": true,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/)
                ],
                "storageKey": "board(order:{\"asc\":\"index\"})"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppMutation",
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": (v8/*: any*/),
        "concreteType": "AddGameBoardPayload",
        "kind": "LinkedField",
        "name": "addGameBoard",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GameBoard",
            "kind": "LinkedField",
            "name": "gameBoard",
            "plural": true,
            "selections": [
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "Field",
                "kind": "LinkedField",
                "name": "board",
                "plural": true,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": "board(order:{\"asc\":\"index\"})"
              },
              (v15/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "95db21a0e821a28a2f59d159f38b563e",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $player: Boolean!\n  $size: Int!\n  $used: Int!\n  $board: [FieldRef!]!\n) {\n  deleteField(filter: {}) {\n    msg\n  }\n  deleteGameBoard(filter: {}) {\n    msg\n  }\n  addGameBoard(input: {board: $board, size: $size, used: $used, player: $player}) {\n    gameBoard {\n      player\n      size\n      used\n      board(order: {asc: index}) {\n        index\n        value\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "06a7e89afa3bde4e75bb19789148ee13";

export default node;
