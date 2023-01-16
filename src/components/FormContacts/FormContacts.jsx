import { Component } from "react";

export class FormContacts extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (event) => {
    const { name, number } = this.state;
    event.preventDefault();
    this.props.onSubmit(name, number);
    this.props.repeat(name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>PhoneBook</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <input
            type="tel"
            placeholder="Number"
            value={number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}
