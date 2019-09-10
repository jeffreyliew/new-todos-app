import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions/todos";
import { generateId } from "../utils";
import List from "./List";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const { input } = this.state;
    this.setState({ input: "" });
    this.props.dispatch(
      addTodo({
        id: generateId(),
        date: Date(),
        name: input,
        complete: false
      })
    );
  }

  toggleItem(id) {
    this.props.dispatch(toggleTodo(id));
  }

  deleteItem(id) {
    this.props.dispatch(deleteTodo(id));
  }

  inputChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            name="todo"
            value={this.state.input}
            onChange={this.inputChange}
            placeholder="Todo"
            required
            pattern=".+"
          />
          <input type="submit" value="Add Todo" />
        </form>
        <List
          items={this.props.todos}
          toggle={this.toggleItem}
          delete={this.deleteItem}
        />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
