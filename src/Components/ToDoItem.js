import { ReactComponent as CheckIcon } from "../Assets/images/icon-check.svg";
import { ReactComponent as CrossIcon } from "../Assets/images/icon-cross.svg";
import { ToDoItemsContext } from "../Store/todoItems.context";
import { useContext, useEffect, useState } from "react";

const ToDoItem = (props) => {
  let rmvBtn = "";
  const ToDoItemsCtx = useContext(ToDoItemsContext);
  const [isCompleted, setIsCompleted] = useState(() => {
    let toDoItem = ToDoItemsCtx.toDos.filter((toDo) => {
      return toDo.id === props.idNum;
    });

    return toDoItem[0].isCompleted;
  });

  useEffect(() => {
    setIsCompleted(() => {
      let toDoItem = ToDoItemsCtx.toDos.filter((toDo) => {
        return toDo.id === props.idNum;
      });
      return toDoItem[0].isCompleted;
    });
  }, [ToDoItemsCtx.toDos, props.idNum]);

  const onPointerEnterHandler = (id) => {
    rmvBtn = document.getElementById(`rmv-btn-${id}`);
    rmvBtn.classList.add("remove-btn-active");
  };
  const onPointerLeaveHandler = (id) => {
    rmvBtn = document.getElementById(`rmv-btn-${id}`);
    rmvBtn.classList.remove("remove-btn-active");
  };
  const onRemoveItemHandler = (id) => {
    return ToDoItemsCtx.removeToDo(id);
  };

  return (
    <li
      className="todo-item"
      onPointerEnter={() => onPointerEnterHandler(props.idNum)}
      onPointerLeave={() => onPointerLeaveHandler(props.idNum)}
    >
      <div
        className={isCompleted ? "check-box check-box-clicked" : "check-box"}
        onClick={() => {
          ToDoItemsCtx.isCompletedStatusToggle(props.idNum);
        }}
      >
        <CheckIcon
          className={
            isCompleted ? "check-icon check-icon-clicked" : "check-icon"
          }
        />
      </div>
      <div className="todoTitle-crossIcon-wrapper">
        <h3
          className={
            isCompleted ? "todoTitle todoTitle-completed" : "todoTitle"
          }
        >
          {props.title}
        </h3>
        <div
          className="remove-btn"
          id={`rmv-btn-${props.idNum}`}
          onClick={() => onRemoveItemHandler(props.idNum)}
        >
          <CrossIcon className="cross-icon" />
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
