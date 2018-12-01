import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shape">
        {/* <h2>FAVORITE MOVIES</h2> */}
        <h3>{this.props.movieTitle}</h3>
        <img src={this.props.moviePoster} />
        <p>{this.props.movieYear}</p>
        <p>{this.props.movieDesc}</p>
      </div>
    );
  }
}
export default Movie;
