import { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    experience: "junior",
    license: false,
  };

  handleChangeEvent = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", email: "" });
  };

  handleLicenseChange = (event) => {
    this.setState({ license: event.currentTarget.checked });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChangeEvent}
            value={this.state.name}
          />
        </label>

        <label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChangeEvent}
            value={this.state.email}
          />
        </label>
        <p>Ваш уровень разработчика: </p>
        <label>
          Junior
          <input
            type="radio"
            value="junior"
            name="experience"
            onChange={this.handleChangeEvent}
            checked={this.state.experience === "junior"}
          />
        </label>
        <br />
        <label>
          Middle
          <input
            type="radio"
            value="middle"
            name="experience"
            onChange={this.handleChangeEvent}
            checked={this.state.experience === "middle"}
          />
        </label>
        <br />
        <label>
          Senior
          <input
            type="radio"
            value="senior"
            name="experience"
            onChange={this.handleChangeEvent}
            checked={this.state.experience === "senior"}
          />
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          Согласен на обработку персональной информации
        </label>
        <br />
        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}
