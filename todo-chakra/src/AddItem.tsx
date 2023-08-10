import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export const AddItem: React.FC<{ submitHandler: (item: string) => void }> = (
  props
) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const [isError, setIsError] = useState(false);

  const fun = () => {
    console.log("hi");
  };

  const func = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fun();
  };

  return (
    <form onSubmit={func}>
      <FormControl
        mt="50px"
        w="70%"
        display="flex"
        flexDir="column"
        alignItems="center"
        isInvalid={isError}
      >
        <Input
          type="text"
          value={input}
          onChange={inputChangeHandler}
          placeholder="New Item"
          _invalid={{ borderColor: "#d90429", boxShadow: "0 0 0 1px #C00424" }}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage textColor="#d90429">
            Item is required
          </FormErrorMessage>
        )}
        <Button type="submit">submit</Button>
      </FormControl>
    </form>
  );
};
