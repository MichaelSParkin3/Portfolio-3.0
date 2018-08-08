import React, { Component } from 'react';

export default class Projects extends Component {
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
      <div className="black-slider">
        <div className="projects projects-mobile">
          <div>
            <h3>Ecommerce Site</h3>
            <a
              target="_blank"
              href="https://ecommerce-react-app.herokuapp.com/home"
            >
              Visit Site
            </a>
            <a
              className="code-link"
              target="_blank"
              href="https://github.com/MichaelSParkin3/Ecommerce-React"
            >
              See Code
            </a>
          </div>
          <div>
            <h3>Rent a Bike</h3>
            <a
              target="_blank"
              href="https://rent-a-bike-react.herokuapp.com/landing"
            >
              Visit Site
            </a>
            <a
              className="code-link"
              target="_blank"
              href="https://github.com/MichaelSParkin3/Rent-A-Bike"
            >
              See Code
            </a>
          </div>
          <div>
            <h3>My Movie List</h3>
            <a
              target="_blank"
              href="https://movie-app-react-redux.herokuapp.com/main"
            >
              Visit Site
            </a>
            <a
              className="code-link"
              target="_blank"
              href="https://github.com/MichaelSParkin3/MyMovieList"
            >
              See Code
            </a>
          </div>
        </div>
        <div className="projects projects-pc">
          <div
            id="carouselExampleControls"
            className="carousel slide fadeIn"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="custom-slide">
                  <div
                    className="d-block w-100 slide-1-img"
                    src="..."
                    alt="First slide"
                  />
                  <div className="slide-info-container">
                    <div className="slide-info">
                      <h3>Clothing Ecommerce Website</h3>
                      <p>
                        Sleek clothing ecommerce site I created. The whole site
                        is coded by me using reactjs.
                      </p>
                      <div className="tags">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Javascript</span>
                        <span>Reactjs</span>
                        <span>SASS</span>
                      </div>
                      <a
                        target="_blank"
                        href="https://ecommerce-react-app.herokuapp.com/home"
                      >
                        Visit Site
                      </a>
                      <a
                        className="code-link"
                        target="_blank"
                        href="https://github.com/MichaelSParkin3/Ecommerce-React"
                      >
                        See Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="custom-slide">
                  <div
                    className="d-block w-100 slide-2-img"
                    src="..."
                    alt="First slide"
                  />
                  <div className="slide-info-container">
                    <div className="slide-info">
                      <h3>Rent a Bike</h3>
                      <p>
                        Landing page for online bike rental service and it is
                        all hand coded by me using reactjs.
                      </p>
                      <div className="tags">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Javascript</span>
                        <span>Reactjs</span>
                        <span>SASS</span>
                      </div>
                      <a
                        target="_blank"
                        href="https://rent-a-bike-react.herokuapp.com/landing"
                      >
                        Visit Site
                      </a>
                      <a
                        className="code-link"
                        target="_blank"
                        href="https://github.com/MichaelSParkin3/Rent-A-Bike"
                      >
                        See Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="custom-slide">
                  <div
                    className="d-block w-100 slide-3-img"
                    src="..."
                    alt="First slide"
                  />
                  <div className="slide-info-container">
                    <div className="slide-info">
                      <h3>Movie List Site</h3>
                      <p>
                        App made with reactjs and redux to solidify my knowledge
                        after taking various courses. Use the search bar at the
                        top to find movies from a database. The data is then
                        displayed. Press the check mark on the display to add
                        the movie to your library. In your library you can then
                        rate the movies out of 5.
                      </p>
                      <div className="tags">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Javascript</span>
                        <span>Reactjs</span>
                        <span>Redux</span>
                        <span>SASS</span>
                      </div>
                      <a
                        target="_blank"
                        href="https://movie-app-react-redux.herokuapp.com/main"
                      >
                        Visit Site
                      </a>
                      <a
                        className="code-link"
                        target="_blank"
                        href="https://github.com/MichaelSParkin3/MyMovieList"
                      >
                        See Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
