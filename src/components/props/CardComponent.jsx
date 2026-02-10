import React from "react";

export const CardComponent = (props) => {
  return (
    <div  className="container mt-5">
      <div  className="card custom-card" style={{ width: "16rem" }}>
        
        <img
          src="https://picsum.photos/300/200"
          className="card-img-top"
          alt="image"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body text-center">
          <h5 className="card-title">
            {props.title || "Title"}
          </h5>

          <p className="card-text">
            {props.description || "Description"}
          </p>

          <button className="btn custom-btn">
            Go somewhere
          </button>
        </div>

      </div>
    </div>
  );
};
