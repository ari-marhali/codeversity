import { graphql } from "relay-runtime";

export const saveGame = graphql`
  mutation appHelpersMutation(
    $player: Boolean!
    $size: Int!
    $fieldsUsed: Int!
    $board: [FieldRef!]!
  ) {
    deleteField(filter: {}) {
      msg
    }
    deleteGameBoard(filter: {}) {
      msg
    }
    addGameBoard(
      input: {
        board: $board
        size: $size
        fieldsUsed: $fieldsUsed
        player: $player
      }
    ) {
      gameBoard {
        player
        size
        fieldsUsed
        board(order: { asc: index }) {
          index
          value
        }
      }
    }
  }
`;

export const loadGame = graphql`
  query appHelpersQuery {
    queryGameBoard {
      board(order: { asc: index }) {
        index
        value
      }
      player
      size
      fieldsUsed
    }
  }
`;
