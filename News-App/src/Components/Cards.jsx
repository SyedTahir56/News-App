import React from 'react';
import image from '../assets/image.jpg';

const Cards = ({ title, description, src, url }) => {
  return (
    <div className="card mb-3 d-inline-block my-3 mx-3" style={{ maxWidth: "345px" }}>
      <img 
        src={src || image} 
        className="card-img-top" 
        alt={title || "News Thumbnail"} 
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "Untitled"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "This is breaking news"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Cards;
