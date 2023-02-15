import { createContext, useState } from "react";

export const ToDoItemsContext = createContext({
  toDos: [],
  totalToDos: 0,
  addToDo: (toDoItemInfo) => {},
  //   removeToDoItem: (toDoItemId) => {},
  //   isCompleted: (toDoItemId) => {},
});

export const ToDoItemsContextProvider = (props) => {
  const [toDoItems, setToDoItems] = useState([]);
  let toDoItemsArr = [];

  if (localStorage["toDoItems"]) {
    toDoItemsArr = localStorage.getItem("toDoItems");
    setToDoItems((currentToDoItems) => currentToDoItems.concat(toDoItemsArr));
  }

  const addToDoItemHandler = (toDoItemInfo) => {
    setToDoItems((currentToDoItems) => {
      return currentToDoItems.concat(toDoItemInfo);
    });
    localStorage.setItem("toDoItems", toDoItems);
  };
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
