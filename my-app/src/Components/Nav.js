import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import history from '../history';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      black: false
    };

    this.transition = this.transition.bind(this);
    this.changeText = this.changeText.bind(this);
  }
  render() {
    return (
      <div className="nav-div">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            className={
              this.state.black ? 'navbar-brand' : 'navbar-brand color-black'
            }
            to="/"
          >
            M
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li
                onClick={() => {
                  this.transition('home');
                }}
                className="nav-item active"
              >
                <Link
                  className={
                    this.state.black ? 'nav-link' : 'nav-link color-black'
                  }
                  to="/"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                onClick={() => {
                  this.transition('projects');
                }}
                className="nav-item"
              >
                <Link
                  className={
                    this.state.black ? 'nav-link' : 'nav-link color-black'
                  }
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li
                onClick={() => {
                  this.transition('about');
                }}
                className="nav-item"
              >
                <Link
                  className={
                    this.state.black ? 'nav-link' : 'nav-link color-black'
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={
                    this.state.black ? 'nav-link' : 'nav-link color-black'
                  }
                  href="mailto:MichaelSParkin3@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  //transition from route to route
  transition(path) {
    console.log(path);
    if (path == 'about' && this.state.black == true) {
      this.props.navChange();
    } else if (path == 'projects' && this.state.black == false) {
      this.props.navChange();
    } else if (path == 'home' && this.state.black == true) {
      this.props.navChange();
    }
  }

  changeText() {
    console.log('CHANGE_ING');
    const currentState = this.state.black;
    this.setState({ black: !currentState });
  }
}
