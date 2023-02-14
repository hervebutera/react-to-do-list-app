import ToDoItem from "./ToDoItem";
import BottomNavBar from "./BottomNavBar";

const ToDoList = () => {
  return (
    <div className="ToDoList">
      <ul>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ul>
      <BottomNavBar />
    </div>
  );
};

export default ToDoList;
