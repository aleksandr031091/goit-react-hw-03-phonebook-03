import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import { v4 as uuidv4 } from "uuid";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      this.state.contacts.find(
        (contact) => contact.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    if (this.state.contacts.find((contact) => contact.number === number)) {
      return alert(`${number} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts && this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.contacts !== this.state.contact &&
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />

        <ContactList
          contacts={this.filterContacts()}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
