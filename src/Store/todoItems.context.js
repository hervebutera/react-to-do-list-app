import { createContext, useEffect, useState } from "react";

export const ToDoItemsContext = createContext({
  toDos: [],
  totalToDos: 0,
  addToDo: (toDoItemInfo) => {},
  removeToDo: (toDoItemId) => {},
  isCompletedStatusToggle: (toDoItemId) => {},
  clearCompletedToDos: () => {},
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

  const removeToDoItemHandler = (toDoItemId) => {
    setToDoItems((currentToDoItems) => {
      return currentToDoItems.filter((todo) => {
        return todo.id !== toDoItemId;
      });
    });
  };

  const isCompletedStatusToggleHandler = (toDoItemId) => {
    setToDoItems((currentToDoItems) => {
      return currentToDoItems.map((todoItem) => {
        if (toDoItemId === todoItem.id) {
          todoItem.isCompleted = !todoItem.isCompleted;
        }
        return todoItem;
      });
    });
  };

  const clearCompletedToDos = () => {
    setToDoItems((currentToDoItems) => {
      const unCompletedTodos = currentToDoItems.filter((toDo) => {
        return toDo.isCompleted === false;
      });
      return unCompletedTodos;
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
    removeToDo: removeToDoItemHandler,
    isCompletedStatusToggle: isCompletedStatusToggleHandler,
    clearCompletedToDos: clearCompletedToDos,
  };

  return (
    <ToDoItemsContext.Provider value={context}>
      {props.children}
    </ToDoItemsContext.Provider>
  );
};
