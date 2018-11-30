import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Ferris Bueller's Day Off",
          year: "1986",
          description:
            "A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Bridget Jones' Diary",
          year: "2001",
          description:
            "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "50 First Dates",
          year: "2004",
          description:
            "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        },
        {
          title: "Matilda",
          year: "1996",
          description:
            "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {/* <Header title="ABOUT" count={2} />
        <Header class="small" title="SERVICES" count={4} /> */}
        <Header class="title-class" title="nora's movie app" />
        <h2>CHECK OUT ALL THE 2018 BLOCKBUSTERS THAT MADE HEADLINES!</h2>

        <div className="flex">
          {this.state.movies.map(movie => (
            <Movie
              movieTitle={movie.title}
              movieYear={movie.year}
              moviePoster={movie.poster}
              movieDesc={movie.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
