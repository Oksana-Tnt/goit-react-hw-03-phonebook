import React from 'react';
import IconButton from 'components/IconButton/IconButton';
import { FaBeer } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io';

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success"> Phonebook</span>
        {/* <button className="btn btn-outline-success" onClick={showModal}>
          Add Contact
        </button> */}
        <IconButton onClick={showModal}>
          <ion-icon name="person-add" size="large"></ion-icon>
        </IconButton>
      </div>
    </nav>
  );
};

export default Header;
