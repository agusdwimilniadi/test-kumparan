import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../parts/Comments";
import Navbar from "../parts/Navbar";
import Username from "../parts/Username";
import {
  selectedPost,
  removeSelectedPost,
} from "../redux/actions/productsActions";

const Detailpost = () => {
  const post = useSelector((state) => state).post;

  const postId = useParams().id;
  const dispatch = useDispatch();

  const fetchPostDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedPost(response.data));
  };
  useEffect(() => {
    if (postId && postId !== "") fetchPostDetail();
    return () => {
      dispatch(removeSelectedPost());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <>
      <Navbar />
      <div className="container">
        {Object.keys(post).length === 0 ? (
          <>
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <h1>{post.title}</h1>
            </div>
            <Username />
            <p>{post.body}</p>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="headings d-flex justify-content-between align-items-center mb-3">
                  <h5>Comments</h5>
                </div>
                <Comments id={post.id} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Detailpost;
