import { useContext, useEffect, useState } from "react";
import { ToDoItemsContext } from "../Store/todoItems.context";

const BottomNavBar = (props) => {
  const ToDoItemsCtx = useContext(ToDoItemsContext);
  const [unCompletedToDosLength, setUnCompletedToDosLength] = useState(() => {
    const unCompletedToDos = ToDoItemsCtx.toDos.filter((toDo) => {
      return toDo.isCompleted === false;
    });
    return unCompletedToDos.length;
  });

  useEffect(() => {
    setUnCompletedToDosLength(() => {
      const unCompletedToDos = ToDoItemsCtx.toDos.filter((toDo) => {
        return toDo.isCompleted === false;
      });
      return unCompletedToDos.length;
    });
  }, [ToDoItemsCtx.toDos]);

  return (
    <div className="bottomNav">
      <span className="bottom-li items-count">
        {`${unCompletedToDosLength} items left`}
      </span>
      <ul>
        <li
          className={
            props.displayCategory === "all"
              ? "bottom-li nav-li nav-li-active"
              : "bottom-li nav-li"
          }
          onClick={props.onAllClick}
        >
          All
        </li>
        <li
          className={
            props.displayCategory === "active"
              ? "bottom-li nav-li nav-li-active"
              : "bottom-li nav-li"
          }
          onClick={props.onActiveClick}
        >
          Active
        </li>
        <li
          className={
            props.displayCategory === "completed"
              ? "bottom-li nav-li nav-li-active"
              : "bottom-li nav-li"
          }
          onClick={props.onCompletedClick}
        >
          Completed
        </li>
        <li
          className="bottom-li clear-btn"
          onClick={() => ToDoItemsCtx.clearCompletedToDos()}
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
