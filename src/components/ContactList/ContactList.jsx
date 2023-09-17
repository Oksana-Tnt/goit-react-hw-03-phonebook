import React from 'react';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="list-group">
    {contacts.map(contacts => (
      <li
        key={contacts.id}
        className="list-group-item justify-content-md-center"
      >
        <div className="d-grid gap-2 d-flex justify-content-between">
          {contacts.name} : {contacts.number}
          <button
            className="btn btn btn-outline-success btn-sm bg-dark"
            onClick={() => onDeleteContact(contacts.id)}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default ContactList;
