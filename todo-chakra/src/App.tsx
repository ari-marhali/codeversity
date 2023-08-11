import { Flex } from "@chakra-ui/react";
import { AddItem } from "./AddItem";
import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { Navbar } from "./Navbar";

export interface ListItem {
  id: number;
  text: string;
  done: boolean;
}
export const App: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>(
    JSON.parse(localStorage.getItem("listItems") || "[]")
  );

  const itemAdder = (item: string) => {
    setListItems([
      {
        id: listItems.length ? listItems.length + 1 : 1,
        text: item,
        done: false,
      },
      ...listItems,
    ]);
  };

  const itemRemover = (id: number) => {
    setListItems((prevListItems) => {
      return prevListItems.filter((item) => item.id !== id);
    });
  };

  const statusHandler = (id: number) => {
    setListItems((prevListItems) => {
      return prevListItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
    });
  };

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <Flex
      bg="#DDE7EA"
      h="100%"
      display="flex"
      justify="start"
      flexDirection="column"
      align="center"
    >
      <Navbar />
      <AddItem submitHandler={itemAdder} />
      {listItems[0] && (
        <Flex
          direction="column"
          align="center"
          border="2px solid #2b2d42"
          borderRadius="8px"
          w="90%"
          boxShadow="1px 1px 1px #212233"
          pt="10px"
          pb="10px"
        >
          {listItems.map((item) => (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              done={item.done}
              doneHandler={statusHandler}
              removeHandler={itemRemover}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
};
