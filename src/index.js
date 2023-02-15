import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Assets/index.css";
import App from "./App";
import { ToDoItemsContextProvider } from "./Store/todoItems.context";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ToDoItemsContextProvider>
      <App />
    </ToDoItemsContextProvider>
  </StrictMode>
);
