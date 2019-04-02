import React from "react";
import TodoListItem from "./../todo-list-item/todo-list-item";

const TodoList = ({ toDos }) => {
  const elements = toDos.map(item => {
    return (
      <li>
        <TodoListItem key={item.id} label={item.label} />
      </li>
    );
  });
  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default TodoList;
