import React from 'react';

const IconButton = ({ onClick, ...allyProps }) => (
  <button
    className="btn btn-outline-success"
    onClick={onClick}
    {...allyProps}
  ></button>
);

IconButton.defaultProps = {
  onclick: () => null,
  children: null,
};

export default IconButton;
