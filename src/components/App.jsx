import { Component } from "react";
import shortid from "shortid";

import { FormContacts } from "./FormContacts";
import { ContactsList } from "./ContactsList";
import { Filter } from "./Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addNewContact = (newName, newNumber) => {
    const newContact = {
      id: shortid.generate(),
      name: newName,
      number: newNumber,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
  };

  repeatContact = (nameId) => {
    this.state.contacts.filter((contact) => {
      if (contact.name.includes(nameId)) {
        alert(`${nameId} is already been`);
      }
      return false;
    });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const getContacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(getContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  render() {
    const { filter } = this.state;
    const filteredName = this.getVisibleContacts();

    return (
      <>
        <FormContacts onSubmit={this.addNewContact} repeat={this.repeatContact} />
        <Filter onFilter={this.changeFilter} value={filter} />

        <ContactsList value={filteredName} onDelete={this.deleteContact} />
      </>
    );
  }
}
