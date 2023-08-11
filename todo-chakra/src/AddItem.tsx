import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

export const AddItem: React.FC<{ submitHandler: (item: string) => void }> = (
  props
) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setIsError(event.target.value === "");
  };

  const [isError, setIsError] = useState(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input !== "") {
      props.submitHandler(input);
      setInput("");
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "60px",
        marginTop: "60px",
      }}
    >
      <FormControl
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
          borderColor="#8d99ae"
          fontFamily="Ubuntu , sans-serif"
          fontSize="20px"
          p="15px 20pxpx"
          mb="5px"
          bg="edf2f4"
          _hover={{ borderColor: "#6F7E99" }}
          _invalid={{ borderColor: "#d90429", boxShadow: "0 0 0 1px #C00424" }}
        />
        {!isError ? (
          <FormHelperText />
        ) : (
          <FormErrorMessage textColor="#d90429" mt="none">
            Item is required
          </FormErrorMessage>
        )}
        <Button
          type="submit"
          variant="solid"
          leftIcon={<AddIcon />}
          bg="#8d99ae"
          fontFamily="Ubuntu , sans-serif"
          fontSize="18px"
          textColor="#2b2d42"
          mt="5px"
          _hover={{ bg: "#8d99ae", boxShadow: "1px 1px 1px #6F7E99" }}
        >
          Add
        </Button>
      </FormControl>
    </form>
  );
};
