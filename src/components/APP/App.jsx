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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.toggleModal();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.toggleModal();
    }
  };
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
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

    this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Header showModal={this.toggleModal} />
        <Filter value={filter} onChange={this.onChangeFilter} />
        {this.state.isShowModal && (
          <Modal
            closeModal={this.toggleModal}
            handleBackdropClick={this.handleBackdropClick}
          >
            <FormContact addContact={this.addContact} />
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
