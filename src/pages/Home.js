import React, { useEffect } from "react";
import Card from "../parts/Card";
import Navbar from "../parts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPost } from "../redux/actions/productsActions";

const Home = () => {
  const post = useSelector((state) => state.allPost.post);
  const dispatch = useDispatch();

  const fetchPost = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setPost(response.data));
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="text-center mb-5">Post</h1>
        <div className="row">
          {post.map((item) => {
            return (
              <div className="col-md-12">
                <Card
                  key={item.id}
                  id={item.id}
                  userId={item.userId}
                  title={item.title}
                  body={item.body}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
