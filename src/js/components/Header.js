import React, { Component } from "react";
import styles from './Header.css';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="header">
            <h1>Surfs On</h1>
        </div>
    );
  }
}

export default Header;