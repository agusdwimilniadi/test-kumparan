import React from "react";
import Button from "../elements/button";

const Notfound = () => {
  return (
    <>
      <div className="container">
        <div className="text-center" style={{ paddingTop: "20%" }}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-weight-bold">404 NOT FOUND</h1>
              <Button className="btn btn-primary" type="link" href="/">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
