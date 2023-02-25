import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./components/Counter";
import List from "./components/List";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }

  toggle = () => {
    this.setState((prev) => ({
      toggle: !prev.toggle,
    }));
  };

  render() {
    return (
      <>
        <Counter />
        <br />
        <br />
        <List/>
        <br />
        <button onClick={() => this.toggle()}>Change Page</button>
        {this.state.toggle ? <Home /> : <About />}
      </>
    );
  }
}

export default App;
