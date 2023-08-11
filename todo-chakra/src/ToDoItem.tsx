import { Checkbox, Flex, IconButton } from "@chakra-ui/react";
import { ListItem } from "./App";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface ToDoListItem extends ListItem {
  doneHandler: (id: number) => void;
  removeHandler: (id: number) => void;
}

export const ToDoItem: React.FC<ToDoListItem> = (props: ToDoListItem) => {
  const [hover, setHover] = useState(false);
  return (
    <Flex
      fontFamily="Ubuntu , sans-serif"
      align="start"
      justify="center"
      m="10px"
      textColor="#2b2d42"
      fontSize="21px"
      fontWeight="500"
      p="none"
      border="1px solid #2b2d42"
      w="90%"
      borderRadius="6px"
      bg="#8d99ae"
      boxShadow="1px 1px 1px #2b2d42"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Checkbox
        colorScheme="green"
        size="lg"
        m="auto auto auto 10px"
        borderColor="#2b2d42"
        isChecked={props.done}
        onChange={() => props.doneHandler(props.id)}
        bgColor="#DDE7EA"
      />
      <p style={{ margin: "auto auto auto 0" }}>{props.text}</p>
      {hover && (
        <IconButton
          aria-label="Remove item"
          icon={<DeleteIcon />}
          bg="#d90429"
          textColor="#DDE7EA"
          size="sm"
          _hover={{ background: "#ef233c" }}
          onClick={() => props.removeHandler(props.id)}
        />
      )}
    </Flex>
  );
};
