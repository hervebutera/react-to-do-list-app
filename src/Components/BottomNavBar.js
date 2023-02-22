import { useContext, useEffect, useState } from "react";
import { ToDoItemsContext } from "../Store/todoItems.context";

const BottomNavBar = () => {
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
        <li className="bottom-li nav-li">All</li>
        <li className="bottom-li nav-li">Active</li>
        <li className="bottom-li nav-li">Completed</li>
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
