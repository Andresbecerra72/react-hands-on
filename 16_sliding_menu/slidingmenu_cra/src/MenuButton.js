import React, { Component } from "react";
import "./MenuButton.css";


// using PureComponent to avoid unnecessary render
// class MenuButton extends PureComponent {}
class MenuButton extends Component {


    /*
      Avoiding unnecessary render
    */
  shouldComponentUpdate(nextProps, nextState) {
    if ((nextProps.handleMouseDown, this.props.handleMouseDown)) {
      return false;
    }
    return true;
  }

  render() {
    console.log("render - MenuButton");
    /*
      Avoiding unnecessary render
    */

    return (
      <button
        id="roundButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default MenuButton;
