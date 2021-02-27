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
import { showNextPhoto } from "../bus/gallery/actions";

@hot(module)
export class Gallery extends Component {
  _showNextPhoto = () => {
    store.dispatch(showNextPhoto);
    // this.forceUpdate();
  };

  render() {
    const {
      gallery: { photos, selectedPhotoIndex },
    } = store.getState();
    const photo = photos.find((_, index) => index === selectedPhotoIndex);

    const buttons = [...Array(4).keys()].map((_, currentImageIndex) => (
      <Button
        key={currentImageIndex}
        currentImageIndex={currentImageIndex}
        selectedImageIndex={selectedPhotoIndex}
      />
    ));

    return (
      <section className={Styles.gallery}>
        <img src={photo.url} />
        <div>
          <button>←</button>
          {buttons}
          <button onClick={this._showNextPhoto}>→</button>
        </div>
      </section>
    );
  }
}
