const NewToDoInput = () => {
  return (
    <div className="ItemCard new-todo-input">
      <div></div>
      <input
        type="text"
        className="input-field"
        placeholder="Enter a new todo"
      />
      <button className="Add-btn">Add</button>
    </div>
  );
};

export default NewToDoInput;
