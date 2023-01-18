import { Component } from "react";
import shortid from "shortid";
import { List } from "../List";
import { TodoEditor } from "../TodoEditor";
import { Filter } from "../Filter";
import { MyVerticallyCenteredModal } from "../MyVerticallyCenteredModal";
import Button from "react-bootstrap/Button";

import { Modal } from "../Modal/Modal";
import { BtnForModal } from "../BtnForModal";

import { ReactComponent as CloseIcon } from "../../../svg/close.svg";
export class TodoList extends Component {
  state = {
    todos: [],
    filter: "",
    modalShow: false,
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

    this.toggleModal();
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

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parse = JSON.parse(todos);
    if (parse) {
      this.setState({ todos: parse });
    }
  }
  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  // НЕ ТРОГАТЬ!!!
  // setModalShow = (value) => {
  //   this.setState({ modalShow: value });
  // };

  toggleModal = () => {
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };

  render() {
    const { todos, modalShow } = this.state;
    const completed = todos.filter((todo) => todo.completed);
    const filterTodos = this.getVisibleTodos();
    return (
      <>
        <BtnForModal onToggle={this.toggleModal} />
        {modalShow && (
          <Modal onClose={this.toggleModal} style={{ position: "relative" }}>
            <Button
              variant="primary"
              size="sm"
              onClick={this.toggleModal}
              style={{
                position: "absolute",
                top: "5px",
                right: "8px",
                background: "white",
                borderColor: "white",
              }}
            >
              <CloseIcon width="30" height="30" />
            </Button>

            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <div>
          <p>Общее количество Todo: {todos.length}</p>
          <p>Количество выполненых: {completed.length}</p>
        </div>
        <Filter onFilter={this.state.filter} changeFilter={this.changeFilter} />

        <List todos={filterTodos} title="Мои задачи: " onDelete={this.deleteTodo} />

        {/* <Button variant="primary" onClick={() => this.setModalShow(true)}>
          Open Modal
        </Button>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        /> */}
      </>
    );
  }
}
