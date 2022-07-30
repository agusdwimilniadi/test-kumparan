import { combineReducers } from "redux";
import {
  postReducer,
  selectedAlbumsReducer,
  selectedCommentsReducer,
  selectedPhotoAlbumsReducer,
  selectedPostReducer,
  selectedUserReducer,
} from "./postReducer";

const reducers = combineReducers({
  allPost: postReducer,
  post: selectedPostReducer,
  user: selectedUserReducer,
  comments: selectedCommentsReducer,
  albums: selectedAlbumsReducer,
  photo: selectedPhotoAlbumsReducer,
});

export default reducers;
