import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (text) => {
    const newTodo = { text, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  deleteTodo = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  toggleTodo = (index) => {
    const updatedTodos = this.state.todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoInput onAddTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onDeleteTodo={this.deleteTodo}
          onToggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
