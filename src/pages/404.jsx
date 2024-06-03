import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div>
        <h3> Error404 Page</h3>
        <p>
          Click <Link to="/"> here</Link> Return to homepage{" "}
        </p>
      </div>
    </>
  );
};

export default Error404;
