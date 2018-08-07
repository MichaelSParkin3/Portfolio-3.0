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
      black: false,
      home: false,
      about: false,
      projects: false
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
            MIII
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
                className={
                  this.state.home
                    ? 'nav-item active hvr-float-shadow'
                    : 'nav-item hvr-float-shadow'
                }
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
                className={
                  this.state.projects
                    ? 'nav-item active hvr-float-shadow'
                    : 'nav-item hvr-float-shadow'
                }
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
                className={
                  this.state.about
                    ? 'nav-item active hvr-float-shadow'
                    : 'nav-item hvr-float-shadow'
                }
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
              <li className="nav-item hvr-float-shadow">
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
        <div className="socials">
          <ul>
            <li>
              <a
                className={
                  this.state.black
                    ? 'color-white hvr-float-shadow'
                    : 'color-black hvr-float-shadow'
                }
                target="blank"
                href="https://github.com/MichaelSParkin3"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="linkedIn">
              <a
                className={
                  this.state.black
                    ? 'color-white hvr-float-shadow'
                    : 'color-black hvr-float-shadow'
                }
                target="blank"
                href="https://www.linkedin.com/in/michael-parkin-702396133/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  //transition from route to route
  transition(path) {
    console.log(path);
    if (path == 'about') {
      this.setState({ about: true });
      this.setState({ projects: false });
      this.setState({ home: false });
    } else if (path == 'projects') {
      this.setState({ about: false });
      this.setState({ projects: true });
      this.setState({ home: false });
    } else if (path == 'home') {
      this.setState({ about: false });
      this.setState({ projects: false });
      this.setState({ home: true });
    }
    if (path == 'about' && this.state.black == true) {
      this.props.navChange(path);
    } else if (path == 'projects' && this.state.black == false) {
      this.props.navChange(path);
    } else if (path == 'home' && this.state.black == true) {
      this.props.navChange(path);
    }
  }

  changeText() {
    console.log('CHANGE_ING');
    const currentState = this.state.black;
    this.setState({ black: !currentState });
  }
}
