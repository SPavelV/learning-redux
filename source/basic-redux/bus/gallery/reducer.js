import imageUrl1 from "../../../theme/assets/images/1.jpeg";
import imageUrl2 from "../../../theme/assets/images/2.jpeg";
import imageUrl3 from "../../../theme/assets/images/3.jpeg";
import imageUrl4 from "../../../theme/assets/images/4.jpeg";

// Types
import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO } from "./types";

const initialState = {
  photos: [
    { id: "1", url: imageUrl1 },
    { id: "2", url: imageUrl2 },
    { id: "3", url: imageUrl3 },
    { id: "4", url: imageUrl4 },
  ],
  selectedPhotoIndex: 0,
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEXT_PHOTO:
      if (state.selectedPhotoIndex === state.photos.length - 1) {
        return state;
      }
      return {
        ...state,
        selectedPhotoIndex: state.selectedPhotoIndex + 1,
      };

    case SHOW_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhotoIndex: Number(action.payload),
      };

    default:
      return state;
  }
};
