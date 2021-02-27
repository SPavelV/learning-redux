// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import cx from "classnames";

// Components
import { Button } from "./Button";

// Instruments
import Styles from "./styles.m.css";

// Store
import { store } from "../init/store";

// Actions
import {
  showNextPhoto,
  showSelectedPhoto,
  showPrevPhoto,
} from "../bus/gallery/actions";

@hot(module)
export class Gallery extends Component {
  _showPrevPhoto = () => {
    store.dispatch(showPrevPhoto());
    this.forceUpdate();
  };

  _showNextPhoto = () => {
    store.dispatch(showNextPhoto());
    this.forceUpdate();
  };

  _showSelectedPhoto = (event) => {
    store.dispatch(showSelectedPhoto(event.target.value));
    this.forceUpdate();
  };

  render() {
    const {
      gallery: { photos, selectedPhotoIndex },
    } = store.getState();
    const photo = photos.find((_, index) => index === selectedPhotoIndex);

    const buttons = [...Array(4).keys()].map((_, currentImageIndex) => (
      <Button
        key={currentImageIndex}
        value={currentImageIndex}
        currentImageIndex={currentImageIndex}
        selectedImageIndex={selectedPhotoIndex}
        onClick={this._showSelectedPhoto}
      />
    ));

    return (
      <section className={Styles.gallery}>
        <img src={photo.url} />
        <div>
          <button onClick={this._showPrevPhoto}>←</button>
          {buttons}
          <button onClick={this._showNextPhoto}>→</button>
        </div>
      </section>
    );
  }
}
