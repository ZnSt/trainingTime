import { Component } from "react";
import shortid from "shortid";
import todos from "../../../json/todos.json";
import { List } from "../List";
import { TodoEditor } from "../TodoEditor";
import { Filter } from "../Filter";

export class TodoList extends Component {
  state = {
    todos,
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };
  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.todos.filter((todo) => todo.text.includes(normalizedFilter));
  };

  render() {
    const { todos } = this.state;
    const completed = todos.filter((todo) => todo.completed);
    const filterTodos = this.getVisibleTodos();
    return (
      <>
        <div>
          <p>Общее количество Todo: {todos.length}</p>
          <p>Количество выполненых: {completed.length}</p>
        </div>
        <Filter onFilter={this.state.filter} changeFilter={this.changeFilter} />

        <List todos={filterTodos} title="Состояние Компонента: " onDelete={this.deleteTodo} />
        <TodoEditor onSubmit={this.addTodo} />
      </>
    );
  }
}
