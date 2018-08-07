import React, { Component } from 'react';
import { PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import About from './Components/About';
import { browserHistory } from 'react-router';
import history from './history';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      black: false,
      home: false,
      about: false,
      projects: false
    };

    this.child = React.createRef();

    this.onNavChange = this.onNavChange.bind(this);
  }
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Nav
            navChange={this.onNavChange}
            ref={this.child}
            black={this.state.black}
            home={this.state.home}
            about={this.state.about}
            projects={this.state.projects}
          />
          <div className="white-outer-container" />
          <div
            className={
              this.state.black
                ? 'big-outer-container outer-slide'
                : 'big-outer-container outer-slide-in'
            }
          />
          <div id="outer" className="outer-container">
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              render={() => <Home />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/projects'}
              render={() => <Projects />}
            />
            <Route
              path={process.env.PUBLIC_URL + '/about'}
              render={() => <About />}
            />
          </div>
        </div>
      </Router>
    );
  }
  onNavChange(path) {
    console.log(this.state.black);
    const currentState = this.state.black;
    this.setState({ black: !currentState });
    this.child.current.changeText();
  }
}

export default App;
