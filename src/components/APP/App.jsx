import FormContact from 'components/FormContact/FormContact';
import { Container } from './APP.styled';
import Modal from '../Modal/Modal';
import { Component } from 'react';
import Header from 'components/Header/Header';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export class App extends Component {
  state = {
    isShowModal: false,
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {  
    const { contacts} = this.state;
    if (contacts.find(contact =>
       contact.name.toLowerCase().includes(name.toLowerCase()))){
         alert(`${name} is already in contacts`);
         return;
       }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));    

    this.closeModal();
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Header showModal={this.showModal} />
        <Filter value={filter} onChange={this.onChangeFilter} />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormContact              
              addContact={this.addContact}
            />
          </Modal>
        )}
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
