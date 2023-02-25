import React, { Component } from "react";
import "./loginform.css";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      uname: "",
      email: "",
      password: "",
    };
  }

  handleUsername = (e) => {
    this.setState({
      uname: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleForm = (e) => {
    alert(`${this.state.uname}  ${this.state.email}  ${this.state.password}`);
  };

  render() {
    return (
      <>
        <div className="form_container">
          <form onSubmit={() => this.handleForm()}>
            <section className="form_field">
              <label htmlFor="uname">Username</label>
              <input
                type="text"
                name="uname"
                value={this.state.uname}
                onChange={this.handleUsername}
              />
            </section>
            <section className="form_field">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </section>
            <section className="form_field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </section>
            <section className="form_field">
              <input type="submit" />
            </section>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
