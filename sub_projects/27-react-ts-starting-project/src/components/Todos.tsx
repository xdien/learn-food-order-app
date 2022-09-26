import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItems text={item.text} id={item.id} />
      ))}
    </ul>
  );
};
export default Todos;
