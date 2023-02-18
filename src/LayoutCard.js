import Header from "./Components/Header";
import NewToDoInput from "./Components/NewToDoInput";
import ToDoList from "./Components/ToDoList";
import { useContext } from "react";
import { ToDoItemsContext } from "./Store/todoItems.context";

const LayoutCard = () => {
  const ToDoItemsCtx = useContext(ToDoItemsContext);

  return (
    <div className="LayoutCard">
      <Header />
      <NewToDoInput />
      <ToDoList toDos={ToDoItemsCtx.toDos} />
    </div>
  );
};

export default LayoutCard;
