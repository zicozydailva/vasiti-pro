import React, { useEffect, useState } from "react";
import axios from "axios";
import Review from "./Review";

const Posts = () => {
  const url = "http://localhost:5000/posts";
  const [reviews, setReviews] = useState();

  const getPost = async () => {
    const data = await axios.get(url);
    await setReviews(data.data);
  };

  useEffect(() => {
    getPost();
  }, [reviews]);

  if(!reviews) {
    return <h1 className="center">Loading ...</h1>
  }

  return (
    <div className="review-container">
      {reviews && reviews?.map((review) => {
        return <Review review={review} key={review._id} />;
      })}
    </div>
  );
};

export default Posts;
