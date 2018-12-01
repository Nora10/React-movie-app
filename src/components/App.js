import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import spinner from "../ajax-loader.gif";

// const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=4a3b711b";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      search: "man"
    };
  }
  componentDidMount() {
    this.SearchMovie();
  }

  SearchMovie() {
    let url = `http://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`;
    fetch(url)
      .then(Response => Response.json())
      .then(jsonresponse => {
        this.setState({
          movies: jsonresponse.Search || [],
          loading: false
        });
        // console.log(jsonresponse.Search);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  }
  submitSearch = value => {
    this.setState({ search: value }, () => {
      this.SearchMovie();
    });
  };
  render() {
    return (
      <div className="App">
        {/* <Header title="ABOUT" count={2} />
    <Header class="small" title="SERVICES" count={4} /> */}
        <Header class="title-class" title="nora's movie app" />
        <h2>CHECK OUT ALL THE 2018 BLOCKBUSTERS THAT MADE HEADLINES!</h2>
        <Search submission={this.submitSearch} />
        <div className="flex">
          {this.state.loading ? (
            <img src={spinner} className="img-spinner" alt="spinnerImage" />
          ) : (
            this.state.movies.map(movie => (
              <Movie
                key={movie.imdbID}
                movieTitle={movie.Title}
                movieYear={movie.Year}
                moviePoster={movie.Poster}
                movieDesc={movie.Type}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default App;
