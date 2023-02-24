import ToDoItem from "./ToDoItem";
import BottomNavBar from "./BottomNavBar";
import { useContext, useEffect, useState } from "react";
import { ToDoItemsContext } from "../Store/todoItems.context";

const ToDoList = () => {
  const ToDoItemsCtx = useContext(ToDoItemsContext);
  const [displayedTodos, setDisplayedTodos] = useState(ToDoItemsCtx.toDos);
  const [displayCategory, setDisplayCategory] = useState("all");

  useEffect(() => {
    if (displayCategory === "all") {
      setDisplayedTodos(ToDoItemsCtx.toDos);
    } else if (displayCategory === "active") {
      setDisplayedTodos(() => {
        return ToDoItemsCtx.toDos.filter((todo) => {
          return todo.isCompleted === false;
        });
      });
    } else if (displayCategory === "completed") {
      setDisplayedTodos(() => {
        return ToDoItemsCtx.toDos.filter((todo) => {
          return todo.isCompleted === true;
        });
      });
    }
  }, [ToDoItemsCtx.toDos, displayCategory]);

  const displayAllTodosHandler = () => {
    setDisplayCategory("all");
    setDisplayedTodos(ToDoItemsCtx.toDos);
  };
  const displayActiveTodosHandler = () => {
    setDisplayCategory("active");
    setDisplayedTodos(() => {
      return ToDoItemsCtx.toDos.filter((todo) => {
        return todo.isCompleted === false;
      });
    });
  };
  const displayCompletedTodosHandler = () => {
    setDisplayCategory("completed");
    setDisplayedTodos(() => {
      return ToDoItemsCtx.toDos.filter((todo) => {
        return todo.isCompleted === true;
      });
    });
  };

  return (
    <div className="ToDoList">
      <ul className="ToDoLi-elements">
        {displayedTodos.map((toDo) => {
          return (
            <ToDoItem
              key={toDo.id}
              idNum={toDo.id}
              title={toDo.title}
              isCompleted={toDo.isCompleted}
            />
          );
        })}
      </ul>
      <BottomNavBar
        displayCategory={displayCategory}
        onAllClick={displayAllTodosHandler}
        onActiveClick={displayActiveTodosHandler}
        onCompletedClick={displayCompletedTodosHandler}
      />
    </div>
  );
};

export default ToDoList;
