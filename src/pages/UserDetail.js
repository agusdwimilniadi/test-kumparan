import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../parts/Navbar";
import axios from "axios";
import { selectedAlbums } from "../redux/actions/productsActions";
import Photogallery from "../parts/PhotoGallery";
import Notfound from "./NotFound";

const Userdetail = () => {
  const userData = useSelector((state) => state).user.post;
  const albums = useSelector((state) => state).albums.post;

  const dispatch = useDispatch();

  const fetchAlbum = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${userData.id}/albums`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedAlbums(response.data));
  };
  useEffect(() => {
    if (userData.id && userData.id !== "") fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.id]);
  if (userData.length === 0 && albums.length === 0) {
    return <Notfound />;
  } else {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1 className="text-center font-weight-bolder">User Detail</h1>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <table className="table mt-5">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{userData.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{userData.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>
                      <strong> City: </strong> {userData.address.city} <br />{" "}
                      <strong> Street: </strong> {userData.address.street}{" "}
                      <br /> <strong> Suite: </strong>
                      {userData.address.suite} <br />{" "}
                      <strong> Zip Code: </strong>
                      {userData.address.zipcode}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Company</th>
                    <td>{userData.company.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="text-center my-5">
            <h1>List of Albums</h1>
          </div>
          {albums.map((item) => {
            return (
              <div className="text-left">
                <h3>Albums Name : {item.title}</h3>
                <div className="row my-3">
                  <Photogallery id={item.id} />;
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Userdetail;
