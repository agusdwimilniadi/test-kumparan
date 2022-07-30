import { ActionTypes } from "../constants/action-types";
export const setPost = (post) => {
  return {
    type: ActionTypes.SET_POST,
    payload: post,
  };
};

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post,
  };
};
export const removeSelectedPost = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_POST,
  };
};

export const selectedUser = (post) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: post,
  };
};

export const selectedComments = (post) => {
  return {
    type: ActionTypes.SELECTED_COMMENTS,
    payload: post,
  };
};
export const selectedAlbums = (post) => {
  return {
    type: ActionTypes.SELECTED_ALBUMS,
    payload: post,
  };
};
export const selectedPhotoAlbums = (post) => {
  return {
    type: ActionTypes.SELECTED_PHOTO_ALBUMS,
    payload: post,
  };
};

export const removeSelectedPhotoAlbums = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PHOTO_ALBUMS,
  };
};
