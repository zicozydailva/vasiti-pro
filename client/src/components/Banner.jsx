import React from "react";

const Banner = () => {
  return (
    <section className="banner-container">
      <article className="info-section">
        <h2><span>Amazing</span><br /> Experiences from Our Wonderful Customers</h2>
        <p className="text">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
      </article>
      <article className="img-section">
          <img className="banner-img" src="./images/banner.svg" alt="" />
          <span className="img-bg"></span>
      </article>
    </section>
  );
};

export default Banner;
