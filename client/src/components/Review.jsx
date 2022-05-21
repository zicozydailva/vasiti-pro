import React from "react";

const Review = ({ review }) => {
  const { name, location, category, image, text } = review;

  return (
    <div className="review-card">
      <img className="review-img" src={image || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"} alt={name} />
      <h3>{name}</h3>
      <div className="review-item">
        <p>{location}</p>
        <p className={`review-category ${category}`}>{category}</p>
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

export default Review;
