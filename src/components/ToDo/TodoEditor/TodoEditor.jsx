import { Component } from "react";
import Button from "react-bootstrap/Button";
import { ReactComponent as AddIcon } from "../../../svg/add-outline.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (event) => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.reset();
  };

  reset = () => {
    this.setState({ message: "" });
  };

  render() {
    return (
      <>
        <h2 style={{ paddingTop: "35px", paddingBottom: "8px" }}>
          Here you can write your plans on today!
        </h2>
        <form onSubmit={this.handleSubmit}>
          <FloatingLabel controlId="floatingTextarea2" label="My Plans...">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={this.state.message}
              onChange={this.handleChange}
            />
          </FloatingLabel>
          <Button
            variant="success"
            type="submit"
            style={{ background: "black", marginTop: "30px" }}
            aria-label="Кнопка закрыть"
          >
            <AddIcon fill="red" />
          </Button>
        </form>
      </>
    );
  }
}
