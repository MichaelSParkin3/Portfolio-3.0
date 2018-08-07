import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      black: false,
      home: false,
      about: false,
      projects: false
    };
  }
  render() {
    return (
      <div className="home">
        <div className="name-container text-center">
          <div className="text fadeInUp">
            <h1 className="">MICHAEL S PARKIN III</h1>
            <p className="">FRONT END WEB DEVELOPER</p>
          </div>
        </div>
      </div>
    );
  }
}
