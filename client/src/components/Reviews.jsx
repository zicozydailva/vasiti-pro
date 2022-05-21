import React, { useEffect, useState } from "react";
import reviewData from "../reviewData";
import Review from "./Review";
import axios from "axios";

const Reviews = () => {
  const url = "http://localhost:5000/posts";

  // eslint-disable-next-line
  const [reviews, setReviews] = useState(reviewData);

  return <div className="review-container">
    {
      reviews.map(review => {
        return <Review review={review} key={review.id} />
      })
    }
  </div>;
};

export default Reviews;
