import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoContainer() {

  const todos = useSelector(state => state.todos.entities)

  return <div>
    <h1>To Do</h1>
    {todos.map(todo => <Todo key={todo} text={todo} />)}
  </div>;
}

export default TodoContainer;
