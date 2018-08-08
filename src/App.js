import React, { Component } from "react";
import NavigationContainer from "./js/components/container/NavigationContainer";
import Main from "./js/components/container/Main";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main/>
        <NavigationContainer/>
      </div>
    );
  }
}

export default App;
