import { Component } from "react";
import todos from "../../../json/todos.json";
import { List } from "../List";

export class TodoList extends Component {
  state = {
    todos,
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== id),
    }));
  };
  render() {
    const { todos } = this.state;

    return <List todos={todos} title="Состояние Компонента: " onDelete={this.deleteTodo} />;
  }
}
