import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { StyledContainer, StyledTitle } from './App.styled';
export class App extends React.Component {
  // loginInputId = nanoid();
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = value => {
    this.setState({ filter: value });
  };

  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid();

    const contactExists = contacts.some(contact => contact.name === name);

    contactExists
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id, name, number }],
        }));
  };

  handleDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render() {
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    // const { name, id, number } = this.state;
    return (
      <StyledContainer>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm handleSubmit={this.handleSubmit} />
        <StyledTitle> Contacts</StyledTitle>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList contacts={contacts} handleDelete={this.handleDelete} />
      </StyledContainer>
    );
  }
}
