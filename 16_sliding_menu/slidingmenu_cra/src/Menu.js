/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    console.log("Menu");

    let visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        <h2>
          <a href="#">Home</a>
        </h2>
        <h2>
          <a href="#">About</a>
        </h2>
        <h2>
          <a href="#">Contact</a>
        </h2>
        <h2>
          <a href="#">Search</a>
        </h2>
      </div>
    );
  }
}
