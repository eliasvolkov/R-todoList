import React from "react";
import TodoListItem from "./../todo-list-item/todo-list-item";

const TodoList = () => {
  return (
    <div>
      <ul>
        <li>
          <TodoListItem label="To read a book" />
        </li>
        <li>
          <TodoListItem label="To go shoping" />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
