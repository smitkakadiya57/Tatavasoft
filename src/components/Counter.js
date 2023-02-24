import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  inc(){
    this.setState((prev)=>({
        counter:prev.counter+1
    }))
  }
  render() {
    return <>
    <h1>Counter: {this.state.counter}</h1>
    <button onClick={()=>this.inc()}>Increment</button>
    </>;
  }
}

export default Counter;
