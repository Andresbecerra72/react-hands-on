import React, { Component } from "react";
import FlipMove from "react-flip-move";

export default class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask(item) {
    return (
      <li key={item.id} onClick={() => this.delete(item.id)}>
        {item.text}
      </li>
    );
  }

  delete(id) {
    this.props.delete(id); // output
  }

  render() {
    const listItems = this.props.entries.map((i) => this.createTask(i));
    return (
      <ul className="task-list">
        <FlipMove duration={250} easing="ease-out">{listItems}</FlipMove>
      </ul>
    );
  }
}
