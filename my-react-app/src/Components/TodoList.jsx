import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, onDeleteTodo, onToggleTodo } = this.props;

    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => onDeleteTodo(index)}
            onToggle={() => onToggleTodo(index)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
