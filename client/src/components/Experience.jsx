import React from "react";

const Experience = () => {
  return (
    <section className="experience-wrapper">
      <div className="experience-container">
        <article className="img-section">
          <img className="img-Experience" src="./images/exp.svg" alt="Tolu & Joy" />
          <span className="img-bg-exp"></span>
        </article>
        <article className="exp-section">
          <h2>Tolu & Joy’s Experience</h2>
          <span className="category-Btn">CUSTOMER</span>
          <p className="info-text">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <pre>Share your own story!</pre>
          <div className="underline"></div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
