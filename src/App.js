import React, { Component } from "react";
import Header from "./components/header/header";
import "./App.css";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";

export default class App extends Component {
  toDos = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 }
  ];
  render() {
    return (
      <div className="todo-app">
        <Header toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList toDos={this.toDos} />
      </div>
    );
  }
}
