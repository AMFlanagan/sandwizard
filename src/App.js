import React, { Component } from "react";
import NavBar from "./js/components/NavBar";
import Main from "./js/components/Main";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main/>
        <NavBar/>
      </div>
    );
  }
}

export default App;
