import ToDoItem from "./ToDoItem";
import BottomNavBar from "./BottomNavBar";

const ToDoList = (props) => {
  return (
    <div className="ToDoList">
      <ul>
        {props.toDos.map((toDo) => {
          return <ToDoItem key={toDo.id} toDoItem={toDo} />;
        })}
      </ul>
      <BottomNavBar />
    </div>
  );
};

export default ToDoList;
