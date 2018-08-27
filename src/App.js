import React, { Component } from "react";
import "./App.css";
import Main from "../src/components/main";
import Header from "../src/components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
