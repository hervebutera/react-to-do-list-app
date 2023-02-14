import { ReactComponent as CheckIcon } from "../Assets/images/icon-check.svg";

const ToDoItem = () => {
  return (
    <li className="todo-item">
      <div className="check-box">
        <CheckIcon className="check-icon" />
      </div>
      <h3>Go for a jog</h3>
    </li>
  );
};

export default ToDoItem;
