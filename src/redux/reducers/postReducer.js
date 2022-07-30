import { ActionTypes } from "../constants/action-types";

const initialState = {
  post: [],
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POST:
      return { ...state, post: payload };

    default:
      return state;
  }
};

export const selectedPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_POST:
      return {};
    default:
      return state;
  }
};

export const selectedUserReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, post: payload };
    default:
      return state;
  }
};

export const selectedCommentsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_COMMENTS:
      return { ...state, post: payload };
    default:
      return state;
  }
};
export const selectedAlbumsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_ALBUMS:
      return { ...state, post: payload };
    default:
      return state;
  }
};
export const selectedPhotoAlbumsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PHOTO_ALBUMS:
      return { ...state, post: payload };
    case ActionTypes.REMOVE_SELECTED_PHOTO_ALBUMS:
      return {};
    default:
      return state;
  }
};
