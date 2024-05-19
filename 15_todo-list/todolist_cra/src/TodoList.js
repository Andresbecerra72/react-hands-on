import React, { Component } from "react";
import TodoItems from "./TodoItems";

import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItems = this.addItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItems(e) {
    const arr = this.state.items;

    if (this.input.value) {
      arr.unshift({
        text: this.input.value,
        id: Date.now(),
      });

      this.setState({
        items: arr,
      });

      this.input.value = '';
    }

    e.preventDefault();
  }

  deleteItem(id) {
    const newArr = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: newArr });
  }

  render() {
    return (
      <div className="todo-list-main">
        <div className="header">
          <form onSubmit={this.addItems}>
            <input placeholder="Enter new task" ref={(e) => (this.input = e)} />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
