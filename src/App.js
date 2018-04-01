import React, { Component} from "react";
import Message from "./Components/Message/Message.js";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Message message="Welcome to the react-starter. Start hacking away!" />
      </div>
    );
  }
}

export default App;