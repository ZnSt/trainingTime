import { Component } from "react";
import { ReactComponent as IconSearch } from "../svg/search.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";

export class Form extends Component {
  state = {
    value: "",
  };
  handleSubmit = (event) => {
    const { value } = this.state;
    event.preventDefault();
    if (this.state.value.trim() === "") {
      toast.info("Пожалуйста, введите имя покемона");
      return;
    }
    this.props.onSubmit(value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: "" });
  };
  handleChangeInput = (event) => {
    this.setState({ value: event.currentTarget.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form__style">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeInput}
          placeholder="Find me..."
          className="input__style"
        />
        <button type="submit" className="btn__style">
          <IconSearch style={{ position: "absolute", top: "8px", left: "22px" }}></IconSearch>
        </button>
      </form>
    );
  }
}
