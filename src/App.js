import React, { Component } from "react";
import Message from "./Components/Message/Message.js";
import "normalize.css";
import "./App.css";
import armyKnife from "./swiss-army-knife.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
          <div className="main-header__svg-container">
            <img className="main-header__img" src={armyKnife} />
          </div>
          <h1 className="main-header__title"> Hello, World! </h1>
        </header>
        <section className="container">
          <Message message="Welcome to the react-starter. Start hacking away!" />
        </section>
      </div>
    );
  }
}

export default App;
