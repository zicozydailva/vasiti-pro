import {showcase} from "../reviewData"
import React from 'react';

const Showcase = () => {
    const {name, text, category, image} = showcase
  return (
    <div className="showcase-container">
        <div className="showcase-center">
            <article className="left-showcase">
                <h2>{name}</h2>
                <span className="showcase-category">{category}</span>
                <p className="text">{text}</p>
                <pre  className="showcase-info">Share your own story!</pre>
          <div className="underline"></div>
            </article>
            <article className="right-showcase">
                <img src={image} alt={name} />
            </article>
        </div>
    </div>
  )
}

export default Showcase