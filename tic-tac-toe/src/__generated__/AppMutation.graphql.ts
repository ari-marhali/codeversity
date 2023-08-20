/**
 * @generated SignedSource<<760f3975a52147648845bbeea462a747>>
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
  readonly updateGameBoard: {
    readonly gameBoard: ReadonlyArray<{
      readonly board: ReadonlyArray<{
        readonly id: string;
        readonly index: number;
        readonly value: string;
      }>;
      readonly id: string;
      readonly size: number;
      readonly used: number;
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Literal",
            "name": "filter",
            "value": {
              "id": "0x1a4fdbe950"
            }
          },
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
            "name": "set"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateGameBoardPayload",
    "kind": "LinkedField",
    "name": "updateGameBoard",
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
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "size",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "used",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Field",
            "kind": "LinkedField",
            "name": "board",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "index",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              }
            ],
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMutation",
    "selections": (v5/*: any*/),
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
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "5f6f204646f957ce3b863930ed20e5f5",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $player: Boolean!\n  $size: Int!\n  $used: Int!\n  $board: [FieldRef!]!\n) {\n  updateGameBoard(input: {filter: {id: \"0x1a4fdbe950\"}, set: {player: $player, size: $size, used: $used, board: $board}}) {\n    gameBoard {\n      id\n      size\n      used\n      board {\n        id\n        index\n        value\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e45096c14c195195dae5ee08e921011b";

export default node;
