import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Your Brand</div>
      <button className="get-users-button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
