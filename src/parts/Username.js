import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../elements/button";
import { selectedUser } from "../redux/actions/productsActions";

const Username = () => {
  const userData = useSelector((state) => state).user.post;
  const userId = useSelector((state) => state).post.userId;

  const dispatch = useDispatch();

  const fetchUserDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedUser(response.data));
  };
  useEffect(() => {
    if (userId && userId !== "") fetchUserDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  return (
    <>
      <Button className="nav-link" type="link" href={`/user/${userId}`}>
        Written By : {userData.name}
      </Button>
    </>
  );
};

export default Username;
