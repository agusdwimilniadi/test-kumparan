import React, { useCallback, useEffect, useState } from "react";
import Button from "../elements/button";
import { getDataUserDetail } from "../services/BerandaPost";

const Card = (props) => {
  const [dataUser, setDataUser] = useState([]);

  const getDataUser = useCallback(async () => {
    // console.log("PROPSS ", props);
    const data = await getDataUserDetail(props.userId);
    setDataUser(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataUserDetail]);

  useEffect(() => {
    getDataUser();
  }, [getDataUser]);
  return (
    <>
      <div>
        <section className="">
          <div className="container py-2">
            <article className="postcard light blue">
              {/* eslint-disable */}
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <Button
                    className="nav-link"
                    type="link"
                    href={`/detail/${props.id}`}
                  >
                    {props.title}
                  </Button>
                </h1>
                <div className="postcard__subtitle small">
                  Written by : {dataUser?.name}
                </div>
                <div className="postcard__subtitle small">
                  Company : {dataUser?.company?.name}
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">{props.body}</div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
