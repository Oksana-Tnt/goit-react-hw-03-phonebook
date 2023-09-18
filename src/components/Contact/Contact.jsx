import React from 'react';

const Contact = ({name, number, onDeleteContact}) => (
    <div className="d-grid gap-2 d-flex justify-content-between">
          {name} : {number}
          <button
            className="btn btn btn-outline-success btn-sm bg-dark"
            onClick={onDeleteContact}
          >
            Delete
          </button>
        </div>
)

export default Contact;