import React, { Component } from "react";

class TodoInput extends Component {
  state = {
    titleTask: "",
    task: "",
  };

  handleInputChange = (e) => {
    this.props.changeInput({
      title: this.state.titleTask,
      description: this.state.task,
    });

    this.setState({ task: e.target.value, titleTask: e.target.value });
  };

  handleAdd = () => {
    if (this.state.task.trim() && this.state.titleTask.trim()) {
      this.props.onAddTodo({
        title: this.state.titleTask,
        description: this.state.task,
      });
      this.setState({ titleTask: "", task: "" });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="titleTask"
          value={this.state.titleTask}
          onChange={this.handleInputChange}
          placeholder="Your Task"
        />

        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
