import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo, onDelete, onToggle } = this.props;

    return (
      <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <span onClick={onToggle}>{todo.text}</span>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
