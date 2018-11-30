import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //   <div>
      //     <ul>
      //       <li>TITANIC</li>
      //       <li>THE FAULT IN OUR STARS</li>
      //       <li>THE NOTEBOOK</li>
      //       <li>SNOWDEN</li>
      //       <li>THE GREAT GATSBY</li>
      //     </ul>
      //   </div>

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
