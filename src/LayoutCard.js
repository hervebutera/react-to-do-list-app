import Header from "./Components/Header";
import NewToDoInput from "./Components/NewToDoInput";
import ToDoList from "./Components/ToDoList";

const LayoutCard = () => {
  return (
    <div className="LayoutCard">
      <Header />
      <NewToDoInput />
      <ToDoList />
    </div>
  );
};

export default LayoutCard;
