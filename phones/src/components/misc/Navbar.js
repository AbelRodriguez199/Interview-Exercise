import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link" href="/">Phones List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Phone Details</a>
      </li>
    </ul>
    );
  }
}

export default Nav