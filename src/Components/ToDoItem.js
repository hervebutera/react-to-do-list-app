import { ReactComponent as CheckIcon } from "../Assets/images/icon-check.svg";

const ToDoItem = (props) => {
  return (
    <li className="todo-item">
      <div className="check-box">
        <CheckIcon className="check-icon" />
      </div>
      <h3>{props.toDoItem.title}</h3>
    </li>
  );
};

export default ToDoItem;
