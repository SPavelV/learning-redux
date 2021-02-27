// Core
import React, { Component } from "react";
import cx from "classnames";

// Instruments
import Styles from "./styles.m.css";

export class Button extends Component {
  render() {
    const {
      selectedImageIndex,
      currentImageIndex,
      value,
      onClick,
    } = this.props;

    const buttonActiveStyle = cx({
      [Styles.buttonActive]: selectedImageIndex === currentImageIndex,
    });

    return (
      <button value={value} onClick={onClick} className={buttonActiveStyle}>
        {currentImageIndex + 1}
      </button>
    );
  }
}
