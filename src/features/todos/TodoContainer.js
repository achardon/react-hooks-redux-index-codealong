import React from "react";
import { useSelector } from "react-redux";

function TodoContainer() {

  const todos = useSelector(state => state.todos.entities)

  return <div>
    <h1>To Do</h1>
    {todos.map(todo => <li>{todo}</li>)}
  </div>;
}

export default TodoContainer;
