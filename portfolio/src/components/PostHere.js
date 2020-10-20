import React from "react";
import "../css/Connect.css";

const PostHere = () => {
  // close functionality
  const handleClose = (event) => {
    event.preventDefault();
    if (event.target.className === "close") {
      console.log(event.className);
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span
          onClick={handleClose}
          className="close"
          style={{ display: "block" }}
        >
          &times;
        </span>
        <h1>Hello from PostHere</h1>
      </div>
    </div>
  );
};

export default PostHere;
