import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <div>
              <li>{todo.text}</li>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
