import React, { Component } from "react";
import Header from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import TodoListItem from "./components/todo-list-item/todo-list-item";

export default class App extends Component {
  toDos = [
    { id: 1, label: "drink a coffe" },
    { id: 2, label: "to read a book" },
    { id: 2, label: "to create something" }
  ];
  render() {
    return (
      <div>
        <Header />
        <SearchPanel />
        <TodoList toDos={this.toDos} />
      </div>
    );
  }
}
