import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddToDo = () => {
  const [inpt, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(inpt));
    setInput("");
  };
  return (
    <div>
      <form>
        <div className="d">
          <label htmlFor="add">Add</label>
          <input
            type="text"
            name="addtodo"
            value={inpt}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={addTodoHandler}>
            Add to List
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
