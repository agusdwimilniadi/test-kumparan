import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedComments } from "../redux/actions/productsActions";

const Comments = (props) => {
  const postDataId = useSelector((state) => state).post.id;

  const dataComments = useSelector((state) => state).comments.post;

  const dispatch = useDispatch();

  const fetchUserDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postDataId}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedComments(response.data));
  };
  useEffect(() => {
    if (postDataId && postDataId !== "") fetchUserDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {dataComments.map((item) => {
        return (
          <div className="card p-3 shadow-md mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="user d-flex flex-row align-items-center">
                {/*  eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src="https://i.imgur.com/hczKIze.jpg"
                  width={30}
                  className="user-img rounded-circle mr-2"
                />
                <span>
                  <small className="font-weight-bold text-primary">
                    {item.name}
                  </small>
                  <br />
                  <small className="font-weight-bold">{item.body}</small>
                </span>
              </div>
            </div>
            <div className="action d-flex justify-content-between mt-2 align-items-center">
              <div className="reply px-4">
                <small>Remove</small> <span className="dots" />
                <small>Reply</small> <span className="dots" />
                <small>Translate</small>
              </div>
              <div className="icons align-items-center">
                <i className="fa fa-star text-warning" />
                <i className="fa fa-check-circle-o check-icon" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
