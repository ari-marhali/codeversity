import { useState, useEffect } from "react";
import { ListItem } from "./ListItem";
import Input from "./Input.tsx";
import Navbar from "./Navbar.tsx";

export default function App() {
  type ListItem = {
    id: number;
    done: boolean;
    text: string;
  };

  const [allItems, setItems] = useState<ListItem[]>(
    JSON.parse(localStorage.getItem("allItems") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("allItems", JSON.stringify(allItems));
  }, [allItems]);

  function statusHandler(id: number) {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
    });
  }

  function removeHandler(id: number) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  function addItem(text: string) {
    text &&
      setItems((prevItems) => {
        return [
          {
            id: !allItems.length ? 1 : allItems[0].id + 1,
            done: false,
            text: text,
          },
          ...prevItems,
        ];
      });
  }

  const allItemsJSX: JSX.Element[] = allItems.map((i) => {
    return (
      <ListItem
        key={i.id}
        item={i}
        checkboxHandler={statusHandler}
        deleteHandler={removeHandler}
      />
    );
  });

  return (
    <div id="app">
      <Navbar />
      <Input addFunction={addItem} />
      {allItems[0] && <div id="items">{allItemsJSX}</div>}
    </div>
  );
}
