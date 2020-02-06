import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="Brand">facebook</span>
        <span className="textHeader">Meu perfil</span>
      </div>
    );
  }
}

export default Header;