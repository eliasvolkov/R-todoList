import React from "react";
import TodoListItem from "./../todo-list-item/todo-list-item";

const TodoList = () => {
  return (
    <div>
      <ul>
        <li>
          <TodoListItem />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
