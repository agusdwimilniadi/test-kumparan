import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../elements/button";

const Photogallery = (props) => {
  const dataProps = props.id;
  const [response, setResponse] = useState([]);

  const fetchPhoto = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/albums/${dataProps}/photos`)
      .catch((err) => {
        console.log(err);
      });

    // dispatch(selectedPhotoAlbums(response.data));
    setResponse(response.data);
  };

  useEffect(() => {
    if (dataProps && dataProps !== "") fetchPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProps]);
  return (
    <>
      {response.map((item) => {
        return (
          <div className="col-md-2">
            <Button
              className="nav-link"
              type="link"
              href={`/photo/details/${item.title}`}
            >
              <div
                className="card shadow-md "
                style={{
                  width: "10rem",
                  height: "10rem",
                }}
              >
                <img
                  src={`${item.thumbnailUrl}`}
                  className="card-img-top card-important"
                  alt="..."
                  height={"100%"}
                />
              </div>
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default Photogallery;
