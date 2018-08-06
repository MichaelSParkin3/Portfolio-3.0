import React, { Component } from 'react';

var aboutText =
  "I'm a passionate and determined front end developer. I'm always creating and learning by doing. I genuinely enjoy creating things and solving the brain teasers that comes with it. I have done and am still doing some freelance work here and there, but I'd love to find a full time position.";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="slider inner-slide" />
        <div className="img" />
        <div className="text">
          <p>
            I'm a passionate and determined front end developer. <br />I'm
            always creating and learning by doing. <br />I genuinely enjoy
            creating things and solving the brain teasers that comes with it.{' '}
            <br />
            <br />I have done and am still doing some freelance work here and
            there, but I'd love to find a full time position.
          </p>
        </div>
      </div>
    );
  }
}
