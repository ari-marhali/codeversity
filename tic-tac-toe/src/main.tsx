import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./environment.ts";

const container = document.getElementById("root");

if (container) {
  container.style.height = "100vh";
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RelayEnvironmentProvider environment={environment}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RelayEnvironmentProvider>
    </StrictMode>
  );
}
