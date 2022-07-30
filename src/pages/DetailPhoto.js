import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../parts/Navbar";
import { selectedPhotoAlbums } from "../redux/actions/productsActions";

const Detailphoto = () => {
  const params = useParams().id;
  const dispatch = useDispatch();

  const fetchPhoto = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/photos?title=${params}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedPhotoAlbums(response.data));
  };
  useEffect(() => {
    if (params !== "") fetchPhoto();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  const photo = useSelector((state) => state).photo.post;

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="text-center">
          <h1 className="font-weight-bold">Detail Photo</h1>
          <br />
          <h3 className="font-weight-bold">Title : {photo[0]?.title}</h3>

          <div className="row">
            <div className="col-md-12">
              <img src={`${photo[0]?.url}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailphoto;
