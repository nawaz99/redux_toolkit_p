import React from "react";
import AddTodo from "./components/AddToDo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
