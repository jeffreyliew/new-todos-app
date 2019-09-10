import React from "react";
import { connect } from "react-redux";

function Details({ match, todos }) {
  const todo = todos.find(todo => todo.id === match.params.todoId);
  const bold = { fontWeight: "bold" };

  return (
    <div>
      <span style={bold}>Todo-Id: </span>
      {todo.id}
      <br />
      <span style={bold}>Date: </span>
      {todo.date}
      <br />
      <span style={bold}>Name: </span>
      {todo.name}
      <br />
      <span style={bold}>Complete: </span>
      {todo.complete ? "True" : "False"}
      <br />
    </div>
  );
}

export default connect(state => ({
  todos: state.todos
}))(Details);
