import { useRef } from "react";
import { useContext } from "react";
import { ToDoItemsContext } from "../Store/todoItems.context";

const NewToDoInput = () => {
  const textInput = useRef();
  const TodoItemsCtx = useContext(ToDoItemsContext);

  const addToDoItemHandler = (e) => {
    e.preventDefault();
    TodoItemsCtx.addToDo({
      id: TodoItemsCtx.totalToDos,
      title: textInput.current.value,
    });

    textInput.current.value = "";
  };

  return (
    <div className="ItemCard new-todo-input">
      <input
        type="text"
        className="input-field"
        placeholder="Enter a new todo"
        ref={textInput}
      />
      <button className="Add-btn" onClick={addToDoItemHandler}>
        Add
      </button>
    </div>
  );
};

export default NewToDoInput;
