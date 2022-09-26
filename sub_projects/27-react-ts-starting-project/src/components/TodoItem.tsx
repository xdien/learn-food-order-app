import Todo from "../models/todo";

const TodoItems: React.FC<Todo> = (props) => {
  return <li key={props.id}>{props.text}</li>;
};

export default TodoItems;
