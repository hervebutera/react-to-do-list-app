import { useRef } from "react";
import { useContext } from "react";
import { ToDoItemsContext } from "../Store/todoItems.context";

const NewToDoInput = () => {
  const textInput = useRef();
  const TodoItemsCtx = useContext(ToDoItemsContext);

  const addToDoItemHandler = () => {
    
    if (textInput.current.value.trim().length !== 0) {
      TodoItemsCtx.addToDo({
        id: TodoItemsCtx.totalToDos,
        title: textInput.current.value,
        isCompleted: false,
      });
    }

    textInput.current.value = "";
  };

  return (
    <div className="ItemCard new-todo-input">
      <input
        type="text"
        className="input-field"
        placeholder="Enter a new todo"
        onKeyDown={(e) => {
          if (e.code === "Enter") { 
            addToDoItemHandler();
          } 
         }}
        ref={textInput}
      />
      <button className="Add-btn" onClick={addToDoItemHandler}>
        Add
      </button>
    </div>
  );
};

export default NewToDoInput;
