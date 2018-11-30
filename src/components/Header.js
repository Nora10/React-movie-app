import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="App-header">
        <h2 className={this.props.class}>{this.props.title}</h2>
        {/* <p className={this.props.class}>
          {this.props.title} = {this.props.count}
        </p> */}
        {/* <p>{this.props.count}</p> */}
      </header>
    );
  }
}
export default Header;
