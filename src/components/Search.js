// import React, { Component } from "react"; They are both the same
import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  setValue = event => {
    this.setState({ value: event.target.value });
    this.props.submission(event.target.value); //To search as we are typing
  };

  submitForm = event => {
    this.props.submission(this.state.value); //To search when we clcik submit
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.submitForm}>
          <input
            value={this.state.value}
            className="search-input"
            type="search"
            onChange={this.setValue}
            placeholder="Search here for movies..."
            required=""
          />
          <button className="search">
            Search
            {/* <button type="submit" class="btn btn-primary submit"> */}
            {/* <i class="fas fa-search" /> */}
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
