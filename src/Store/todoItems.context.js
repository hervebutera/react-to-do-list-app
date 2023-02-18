import { createContext, useEffect, useState } from "react";

export const ToDoItemsContext = createContext({
  toDos: [],
  totalToDos: 0,
  addToDo: (toDoItemInfo) => {},
  //   removeToDoItem: (toDoItemId) => {},
  //   isCompleted: (toDoItemId) => {},
});

export const ToDoItemsContextProvider = (props) => {
  const [toDoItems, setToDoItems] = useState(() => {
    return JSON.parse(localStorage.getItem("toDoItems")) || [];
  });

  const addToDoItemHandler = (toDoItemInfo) => {
    setToDoItems((currentToDoItems) => {
      return currentToDoItems.concat(toDoItemInfo);
    });
  };

  useEffect(() => {
    if (toDoItems) {
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
    }
  }, [toDoItems]);

  const context = {
    toDos: toDoItems,
    totalToDos: toDoItems.length,
    addToDo: addToDoItemHandler,
  };

  return (
    <ToDoItemsContext.Provider value={context}>
      {props.children}
    </ToDoItemsContext.Provider>
  );
};
