import { Component } from "react";

import { TodoList } from "./ToDo/TodoList";
export class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}
